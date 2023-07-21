import { createCar, getCars } from '../../http-requests';
import { CarData, CarParams } from '../../types';
import { createElement } from '../../utils';
import { Car } from './components/car/car';
import { CreateForm, UpdateForm } from './components/forms/forms';

export class Garage {
  private element: HTMLElement;
  private createForm: CreateForm;
  private updateForm: UpdateForm;

  constructor() {
    this.element = getGarageElement();

    this.createForm = new CreateForm();
    this.updateForm = new UpdateForm();
    this.createForm.submission.subscribe((carParams) => {
      this.createCar(carParams);
    });
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
    this.element.append(car.getElement());
  }

  createCar(carParams: CarParams) {
    createCar(carParams).then((jsonResp) => {
      this.addCar(jsonResp);
    });
  }
}

function getGarageElement() {
  return createElement({
    tagName: 'section',
    className: 'garage',
  });
}
