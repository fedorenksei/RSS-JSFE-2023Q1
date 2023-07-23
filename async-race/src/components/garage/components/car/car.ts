import './styles.css';
import { CarActionName, CarData, CarParams, HexColor } from '../../../../types';
import { PubSub, createElement } from '../../../../utils';
import { deleteCar, updateCar } from '../../../../http-requests';

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
  private selectButton: HTMLButtonElement;
  private removeButton: HTMLButtonElement;
  private nameElement: HTMLElement;
  private wheelElement: HTMLElement;
  events: Record<CarActionName, PubSub<number>>;

  constructor(props: CarData) {
    this.props = props;
    ({
      element: this.element,
      selectButton: this.selectButton,
      removeButton: this.removeButton,
      nameElement: this.nameElement,
      wheelElement: this.wheelElement,
    } = getCarElements.call(this, props));
    this.events = {
      select: new PubSub<number>(),
      remove: new PubSub<number>(),
    };
    this.subscribeToEvent('remove', () => {
      this.delete();
    });
    this.subscribeToEvent('select', () => {
      this.markSelected();
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

  private markSelected() {
    // this.element.classList.add('car_selected')
    this.selectButton.setAttribute('disabled', '');
  }

  unmarkSelected() {
    // this.element.classList.add('car_selected')
    this.selectButton.removeAttribute('disabled');
  }

  update(carParams: CarParams) {
    updateCar(this.props.id, carParams)
    .then(() => {
      this.nameElement.innerText = carParams.name;
      this.wheelElement.style.backgroundColor = carParams.color;
    })
  }
}

function getCarElements(this: Car, props: CarData) {
  const selectButton = getButton.call(this, 'select');
  const removeButton = getButton.call(this, 'remove');
  const nameElement = getCarNameElement(props.name);
  const wheelElement = getCarImg(props.color);
  const element = createElement({
    tagName: 'div',
    className: CLASS_NAMES.element,
    children: [
      nameElement, 
      wheelElement, selectButton, removeButton],
  });
  return { element, selectButton, removeButton, nameElement, wheelElement };
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
