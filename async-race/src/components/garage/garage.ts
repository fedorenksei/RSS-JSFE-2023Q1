import { createCar, getCars } from '../../http-requests';
import { CarData, CarParams } from '../../types';
import { createElement } from '../common/createElement';
import { Pagination } from '../common/pagination/pagination';
import { Car } from './components/car/car';
import { Form } from './components/forms/forms';

const ITEMS_ON_PAGE = 7;

export class Garage {
  readonly element: HTMLElement;
  private createForm: Form;
  private updateForm: Form;
  private selectedCar?: number | null;
  private cars: Map<number, Car>;
  private pagination: Pagination;

  constructor() {
    this.cars = new Map();
    this.pagination = new Pagination(ITEMS_ON_PAGE);

    this.element = getGarageElement(this.pagination.element);

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
    this.element.prepend(this.createForm.element, this.updateForm.element);

    this.init();
  }

  async init() {
    // const response = await getPage({ resourceType: 'garage', itemsOnPage: 7, page: 1 })
    // console.log(response.headers.get('X-Total-Count'));
    
    const carsData = await getCars();
    if (!carsData) return;
    for (let i = 0; i < carsData.length; i += ITEMS_ON_PAGE) {
      const carsDataOnPage = carsData.slice(i, i + ITEMS_ON_PAGE);
      const cars = carsDataOnPage.map((carData: CarData) => this.addCar(carData))
      this.pagination.addPage(cars.map(car => car.element));
    }
  }

  addCar(carData: CarData): Car {
    const car = new Car(carData);
    this.cars.set(carData.id, car);

    car.events.select.subscribe((id: number) => {
      if (this.selectedCar) {
        const selectedCar = this.getCar(this.selectedCar);
        selectedCar?.unsetSelected();
      }

      this.selectedCar = id;
      this.updateForm.enable();
    });

    car.events.remove.subscribe((id: number) => {
      if (this.selectedCar === id) {
        this.selectedCar = null;
        this.updateForm.clear();
        this.updateForm.disable();
      }
    });

    return car;
  }

  createCar(carParams: CarParams) {
    createCar(carParams).then((jsonResp) => {
      this.pagination.addItem(this.addCar(jsonResp).element);
    });
  }

  private getCar(id: number): Car | undefined {
    return this.cars.get(id);
  }
}

function getGarageElement(paginationElement: HTMLElement): HTMLElement {
  return createElement({
    tagName: 'section',
    className: 'garage',
    children: [paginationElement],
  });
}
