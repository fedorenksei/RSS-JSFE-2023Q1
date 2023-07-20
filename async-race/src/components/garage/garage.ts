import { getCars } from '../../http-requests';
import { CarData } from '../../types';
import { createElement } from '../../utils';
import { Car } from './components/car';

export class Garage {
  private element: HTMLElement;

  constructor() {
    this.element = getGarageElement();
    this.init();
  }

  getElement() {
    return this.element;
  }

  init() {
    getCars()
      .then((resp: Response) => {
        if (!resp.ok) {
          throw new Error('getCars response is not ok');
        }
        return resp.json();
      })
      .then((jsonResp) => {
        if (!Array.isArray(jsonResp)) throw new Error('getCars response is not an array');
        jsonResp.forEach((carData) => {
          this.addCar(carData);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  addCar(carData: CarData): void {
    const car = new Car(carData);
    this.element.append(car.getElement());
  }
}

function getGarageElement() {
  return createElement({
    tagName: 'section',
    className: 'garage',
  });
}
