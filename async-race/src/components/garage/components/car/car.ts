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
    select: 'select-button',
    remove: 'remove-button',
    start: 'start-button',
    stop: 'stop-button',
  },
};

export class Car {
  readonly element: HTMLElement;
  private props: CarData;
  selectButton: InstanceType<typeof Button>;
  removeButton: InstanceType<typeof Button>;
  startButton: InstanceType<typeof Button>;
  stopButton: InstanceType<typeof Button>;
  nameElement: TextElement;
  wheel: Wheel;
  events: Record<CarActionName, PubSub<number>>;

  constructor(props: CarData) {
    this.props = props;
    this.selectButton = getButtonObject.call(this, 'select');
    this.removeButton = getButtonObject.call(this, 'remove');
    this.startButton = getButtonObject.call(this, 'start');
    this.stopButton = getButtonObject.call(this, 'stop');
    this.nameElement = getCarNameElement(props.name);
    this.wheel = new Wheel(props.color);
    this.element = getCarElement.call(this);
    this.events = {
      select: new PubSub<number>(),
      remove: new PubSub<number>(),
      start: new PubSub<number>(),
      stop: new PubSub<number>(),
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

function getCarElement(this: Car) {
  const element = createElement({
    tagName: 'div',
    className: CLASS_NAMES.element,
    children: [
      this.selectButton.element, 
      this.removeButton.element,
      this.startButton.element,
      this.stopButton.element,
      this.nameElement.element, 
      this.wheel.element,
    ],
  });
  return element;
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
