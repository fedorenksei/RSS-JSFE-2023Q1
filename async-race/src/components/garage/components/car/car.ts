import './styles.css';
import { CarActionName, CarData, HexColor } from '../../../../types';
import { PubSub, createElement } from '../../../../utils';
import { deleteCar } from '../../../../http-requests';

const CLASS_NAMES = {
  element: 'car',
  carName: 'car__name',
  buttons: {
    select: 'select-button car-button',
    remove: 'remove-button car-button',
  },
};

export class Car {
  private props: CarData;
  private element: HTMLElement;
  events: Record<CarActionName, PubSub<number>>;

  constructor(props: CarData) {
    this.props = props;
    this.element = getCarElement.call(this, props);
    this.events = {
      select: new PubSub<number>(),
      remove: new PubSub<number>(),
    };
    this.events.remove.subscribe(() => {
      this.delete();
    });
  }

  getElement() {
    return this.element;
  }

  fireEvent(carActionName: CarActionName) {
    this.events[carActionName].fire(this.props.id);
  }

  subscribeToEvent(carActionName: CarActionName, fn: (arg: number) => void) {
    this.events[carActionName].subscribe(fn);
  }

  private delete() {
    deleteCar(this.props.id).then(() => {
      this.element.remove();
    });
  }
}

function getCarElement(this: Car, props: CarData): HTMLElement {
  return createElement({
    tagName: 'div',
    className: CLASS_NAMES.element,
    children: [
      getCarNameElement(props.name),
      getCarImg(props.color),
      getButton.call(this, 'select'),
      getButton.call(this, 'remove'),
    ],
  });
}

function getCarNameElement(name: string) {
  return createElement({
    tagName: 'span',
    className: CLASS_NAMES.carName,
    text: name,
  });
}

function getCarImg(color: HexColor) {
  const element = createElement({
    tagName: 'img',
    className: 'car__image',
  });
  element.style.backgroundColor = color;
  // element.src = carIcon;
  return element;
}

function getButton(this: Car, carActionName: CarActionName) {
  return createElement({
    tagName: 'button',
    className: CLASS_NAMES.buttons[carActionName],
    text: carActionName,
    onclick: () => {
      this.fireEvent(carActionName);
    },
  });
}
