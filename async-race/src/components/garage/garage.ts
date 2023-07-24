import { createCar, getCars } from '../../http-requests';
import { CarData, CarParams } from '../../types';
import { createElement } from '../common/createElement';
import { Car } from './components/car/car';
import { CreateForm, Form, UpdateForm } from './components/forms/forms';

export class Garage {
  readonly element: HTMLElement;
  private createForm: CreateForm;
  private updateForm: UpdateForm;
  private selectedCar?: number | null;
  private cars: Map<number, Car>;

  constructor() {
    this.cars = new Map();

    this.element = getGarageElement();

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
    })
    this.element.prepend(this.createForm.element, this.updateForm.element);

    this.init();
  }

  init() {
    getCars().then((jsonResp) => {
      jsonResp.forEach((carData) => {
        this.addCar(carData);
      });
    });
  }

  addCar(carData: CarData): void {
    const car = new Car(carData);
    this.cars.set(carData.id, car);
    this.element.append(car.element);

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
    })
  }

  createCar(carParams: CarParams) {
    createCar(carParams).then((jsonResp) => {
      this.addCar(jsonResp);
    });
  }

  private getCar(id: number): Car | undefined {
    return this.cars.get(id);
  }
}

function getGarageElement() {
  return createElement({
    tagName: 'section',
    className: 'garage',
  });
}
