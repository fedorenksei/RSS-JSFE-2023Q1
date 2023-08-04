import { RaceActionName } from '../../../../types';
import { PubSub } from '../../../../patterns';
import { Button } from '../../../share/button/button';
import { createElement } from '../../../utils/create-element';
import { Car } from '../car/car';

const CLASS_NAMES = {
  wrapper: 'race-buttons-wrapper',
  buttons: {
    race: 'race-start-button',
    reset: 'race-reset-button',
  },
};

export class Race {
  readonly element: HTMLElement;

  raceButton: InstanceType<typeof Button>;

  resetButton: InstanceType<typeof Button>;

  event: PubSub<RaceActionName>;

  currentRacingCars?: Car[] | null;

  process: {
    driving?: boolean;
    stopping?: boolean;
  };

  constructor() {
    this.process = {};
    this.event = new PubSub<RaceActionName>();
    this.event.subscribe((action) => {
      if (action === 'reset') {
        this.reset();
      }
    });
    const getButtonByAction = (action: RaceActionName) =>
      getButton(action, () => {
        this.event.fire(action);
      });
    this.raceButton = getButtonByAction('race');
    this.resetButton = getButtonByAction('reset');
    this.element = getWrapper([
      this.raceButton.element,
      this.resetButton.element,
    ]);
  }

  async start(cars: Car[]) {
    this.process.driving = true;
    this.currentRacingCars = cars;

    this.resetButton.enable();
    this.raceButton.disable();

    const carsPromises = cars.map((car) => car.startDriving());

    const raceCompleted = Promise.allSettled(carsPromises);
    raceCompleted.then(() => {
      if (!this.process.stopping) {
        this.raceButton.enable();
        this.process.driving = false;
      }
    });

    return Promise.any(carsPromises);
  }

  async reset() {
    if (!this.currentRacingCars) return;
    this.process.stopping = true;

    this.raceButton.disable();
    this.resetButton.disable();

    const carsPromises = this.currentRacingCars.map((car) =>
      car.stopDriving(),
    );
    await Promise.allSettled(carsPromises);

    if (!this.process.driving) {
      this.raceButton.enable();
    }
    this.currentRacingCars = null;

    this.process.stopping = false;
  }
}

function getWrapper(children: HTMLElement[]): HTMLElement {
  return createElement({
    tagName: 'div',
    className: CLASS_NAMES.wrapper,
    children,
  });
}

function getButton(
  actionName: RaceActionName,
  onclick: () => void,
): InstanceType<typeof Button> {
  return new Button({
    text: actionName,
    className: CLASS_NAMES.buttons[actionName],
    onclick,
  });
}
