import './styles.css';
import { CarActionName, CarData, CarParams } from '../../../../types';
import { PubSub } from '../../../../utils';
import { deleteCar, updateCar } from '../../../../http-requests';
import { Button } from '../../../common/button/button';
import { TextElement } from '../../../common/text';
import { createElement } from '../../../common/createElement';
import { Track } from './track';

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
  track: Track;
  events: Record<CarActionName, PubSub<number>>;
  process: {
    driving?: boolean;
    stopping?: boolean;
  };

  constructor(props: CarData) {
    this.props = props;
    this.process = {};

    this.selectButton = getButtonObject.call(this, 'select');
    this.removeButton = getButtonObject.call(this, 'remove');
    this.startButton = getButtonObject.call(this, 'start');
    this.stopButton = getButtonObject.call(this, 'stop');
    this.stopButton.disable();
    this.nameElement = getCarNameElement(props.name);
    this.track = new Track(props);
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

    this.subscribeToEvent('start', async () => {
      try {
        await this.startDriving()
      } catch {
        console.log('The car is suddenly stop');
      }
    });
    this.subscribeToEvent('stop', () => {this.stopDriving()});
  }

  async startDriving() {
    this.startButton.disable();
    this.process.driving = true;

    const engineData = await this.track.startEngine();

    if (engineData) {
      this.stopButton.enable();

      await this.track.drive(engineData);
    }

    if (!this.process.stopping) {
      this.startButton.enable();
    }
    this.process.driving = false;

    return this;
  }

  async stopDriving() {
    this.startButton.disable();
    this.stopButton.disable();
    this.process.stopping = true;

    await this.track.stop();

    if (this.process.driving) {
      this.startButton.setWaiting();
    } else {
      this.startButton.enable();
    }
    this.process.stopping = false;
  }

  fireEvent(carActionName: CarActionName) {
    this.events[carActionName].fire(this.props.id);
  }

  subscribeToEvent(carActionName: CarActionName, fn: (arg: number) => void) {
    this.events[carActionName].subscribe(fn);
  }

  private delete() {
    deleteCar(this.props.id);
  }

  private setSelected() {
    this.element.classList.add('car_selected');
    this.selectButton.disable();
  }

  unsetSelected() {
    this.element.classList.remove('car_selected');
    this.selectButton.enable();
  }

  update(carParams: CarParams) {
    updateCar(this.props.id, carParams).then(() => {
      if (carParams.name) this.nameElement.setText(carParams.name);
      this.track.setColor(carParams.color);
      ({ color: this.props.color, name: this.props.name } = carParams);
    });
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
      this.track.element,
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
