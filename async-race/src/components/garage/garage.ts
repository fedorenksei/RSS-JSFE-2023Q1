import './styles.css';
import { createCar, getCars } from '../../http-requests';
import { CarData, CarParams, RaceActionName } from '../../types';
import { createElement } from '../common/createElement';
import { Pagination } from '../common/pagination/pagination';
import { Car } from './components/car/car';
import { Form } from './components/forms/forms';
import { Race } from './components/race/race';
import { Total } from './components/total/total';

const ITEMS_ON_PAGE = 7;

export class Garage {
  readonly element: HTMLElement;
  private createForm: Form;
  private updateForm: Form;
  private selectedCar?: number | null;
  private cars: Map<number, Car>;
  private carByElement: Map<HTMLElement, Car>;
  private pagination: Pagination;
  private total: Total;
  private race: Race;

  constructor() {
    this.cars = new Map();
    this.carByElement = new Map();

    this.pagination = new Pagination(ITEMS_ON_PAGE);
    this.total = new Total();

    this.race = new Race();
    this.race.event.subscribe((actionName: RaceActionName) => {
      if (actionName === 'race') this.startRace();
    })
    this.race.resetButton.disable();

    this.createForm = new Form('create');
    this.updateForm = new Form('update');
    this.updateForm.disable();
    this.createForm.submission.subscribe((carParams) => {
      this.createCar(carParams);
    });
    this.updateForm.submission.subscribe((carParams) => {
      this.updateForm.disable();
      if (!this.selectedCar) return;
      const car = this.getCar(this.selectedCar);
      if (!car) return;
      car.update(carParams);
      car.unsetSelected();
    });

    this.element = getGarageElement([
      getFormsWrapper([
        this.createForm.element,
        this.updateForm.element,
      ]),
      this.race.element,
      this.total.element,
      this.pagination.element,
    ]);

    this.init();
  }

  async init() {
    // const response = await getPage({ resourceType: 'garage', itemsOnPage: 7, page: 1 })
    // console.log(response.headers.get('X-Total-Count'));

    const carsData = await getCars();
    if (!carsData) return;
    for (let i = 0; i < carsData.length; i += ITEMS_ON_PAGE) {
      const carsDataOnPage = carsData.slice(i, i + ITEMS_ON_PAGE);
      const cars = carsDataOnPage.map((carData: CarData) => this.addCar(carData));
      this.pagination.addPage(cars.map((car) => car.element));
    }
    this.total.set(carsData.length);
  }

  addCar(carData: CarData): Car {
    const car = new Car(carData);
    this.cars.set(carData.id, car);
    this.carByElement.set(car.element, car);

    car.events.select.subscribe((id: number) => {
      if (this.selectedCar) {
        const selectedCar = this.getCar(this.selectedCar);
        selectedCar?.unsetSelected();
      }

      this.selectedCar = id;
      this.updateForm.enable();
    });

    car.events.remove.subscribe((id: number) => {
      this.pagination.removeItem(car.element);
      if (this.selectedCar === id) {
        this.selectedCar = null;
        this.updateForm.clear();
        this.updateForm.disable();
      }
      this.total.minusOne();
    });

    return car;
  }

  createCar(carParams: CarParams) {
    createCar(carParams).then((jsonResp) => {
      const newCar = this.addCar(jsonResp);
      this.pagination.addItem(newCar.element);
    });
    this.total.plusOne();
  }

  async startRace() {
    const carsOnCurrentPage = this.getCarsOnCurrentPage();
    if (!carsOnCurrentPage) return;

    const raceWinner = await this.race.start(carsOnCurrentPage);
    console.log('winner', raceWinner); // add winner displaying
  }

  private getCar(id: number): Car | undefined {
    return this.cars.get(id);
  }

  private getCarsOnCurrentPage() {
    const cars = this.pagination.getCurrentPageItems();
    if (!cars) return;

    const result = cars
    .map((element) => this.carByElement.get(element))
    .filter((car): car is Car => !!car);
    return result;
  }
}

function getGarageElement(children: HTMLElement[]): HTMLElement {
  return createElement({
    tagName: 'section',
    className: 'garage',
    children,
  });
}

function getFormsWrapper(children: HTMLElement[]): HTMLElement {
  return createElement({
    tagName: 'div',
    className: 'forms-wrapper',
    children
  })
}
