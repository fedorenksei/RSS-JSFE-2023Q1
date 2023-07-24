import './styles.css';
import { CarActionName, CarData, CarParams } from '../../../../types';
import { PubSub } from '../../../../utils';
import { deleteCar, updateCar } from '../../../../http-requests';
import { Button } from '../../../common/button';
import { TextElement } from '../../../common/text';
import { createElement } from '../../../common/createElement';
import { Wheel } from './wheel';

const CLASS_NAMES = {
  element: 'car',
  carName: 'car__name',
  buttons: {
    select: 'select-button car-button',
    remove: 'remove-button car-button',
  },
};

export class Car {
  readonly element: HTMLElement;
  private props: CarData;
  private selectButton: InstanceType<typeof Button>;
  private nameElement: TextElement;
  private wheel: Wheel;
  events: Record<CarActionName, PubSub<number>>;

  constructor(props: CarData) {
    this.props = props;
    ({
      element: this.element,
      selectButton: this.selectButton,
      nameElement: this.nameElement,
      wheel: this.wheel,
    } = getCarElements.call(this, props));
    this.events = {
      select: new PubSub<number>(),
      remove: new PubSub<number>(),
    };
    this.subscribeToEvent('remove', () => {
      this.delete();
    });
    this.subscribeToEvent('select', () => {
      this.setSelected();
    });
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

  private setSelected() {
    this.element.classList.add('car_selected')
    this.selectButton.disable();
  }

  unsetSelected() {
    this.element.classList.remove('car_selected')
    this.selectButton.enable();
  }

  update(carParams: CarParams) {
    updateCar(this.props.id, carParams)
    .then(() => {
      if (carParams.name) this.nameElement.setText(carParams.name);
      this.wheel.setColor(carParams.color);
    })
  }
}

function getCarElements(this: Car, props: CarData) {
  const selectButton = getButtonObject.call(this, 'select');
  const removeButton = getButtonObject.call(this, 'remove');
  const nameElement = getCarNameElement(props.name);
  const wheel = new Wheel(props.color);
  const element = createElement({
    tagName: 'div',
    className: CLASS_NAMES.element,
    children: [
      nameElement.element, 
      wheel.element, selectButton.element, removeButton.element],
  });
  return { element, selectButton, removeButton, nameElement, wheel };
}

function getCarNameElement(name: string) {
  return new TextElement({
    tagName: 'span',
    className: CLASS_NAMES.carName,
    text: name,
  });
}

function getButtonObject(this: Car, carActionName: CarActionName) {
  return new Button({
    className: CLASS_NAMES.buttons[carActionName],
    text: carActionName,
    onclick: () => {
      this.fireEvent(carActionName);
    },
  });
}
