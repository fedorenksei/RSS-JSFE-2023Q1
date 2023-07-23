import { createCar, getCars } from '../../http-requests';
import { CarData, CarParams } from '../../types';
import { createElement } from '../../utils';
import { Car } from './components/car/car';
import { CreateForm, UpdateForm } from './components/forms/forms';

export class Garage {
  private element: HTMLElement;
  private createForm: CreateForm;
  private updateForm: UpdateForm;
  private selectedCar?: number | null;
  private cars: Map<number, Car>;

  constructor() {
    this.cars = new Map();

    this.element = getGarageElement();

    this.createForm = new CreateForm();
    this.updateForm = new UpdateForm();
    this.createForm.submission.subscribe((carParams) => {
      this.createCar(carParams);
    });
    this.updateForm.submission.subscribe((carParams) => {
      if (!this.selectedCar) return;
      const car = this.getCar(this.selectedCar);
      car?.update(carParams);
    })
    this.element.prepend(this.createForm.getElement(), this.updateForm.getElement());

    this.init();
  }

  getElement() {
    return this.element;
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
    car.events.select.subscribe((id: number) => {
      if (this.selectedCar) {
        const selectedCar = this.getCar(this.selectedCar);
        selectedCar?.unmarkSelected();
      }
      this.selectedCar = id;
      this.updateForm.enable();
    });
    car.events.remove.subscribe((id: number) => {
      if (this.selectedCar === id) {
        this.selectedCar = null;
        this.updateForm.disable();
        this.updateForm.clear();
      }
    })
    this.element.append(car.getElement());
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
