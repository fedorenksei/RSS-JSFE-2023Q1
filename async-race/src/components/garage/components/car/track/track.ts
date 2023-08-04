import { carSvgText } from './car-icon';
import { CarData, EngineData, HexColor } from '../../../../../types';
import { createElement } from '../../../../utils/create-element';
import {
  startDriving,
  startEngine,
  stopEngine,
} from '../../../../../http-requests';

const CLASS_NAMES = {
  track: {
    basic: 'car__track',
    stopped: 'car__track_stopped',
    finished: 'car__track_finished',
  },
  image: 'car__image',
};

const GREY = '#d7d7d7';

export class Track {
  private carProps: CarData;

  readonly element: HTMLElement;

  carImage: SVGElement;

  private abortAnimation?: boolean;

  private pauseAnimation?: boolean;

  constructor(props: CarData) {
    this.carProps = props;
    ({ element: this.element, carImage: this.carImage } = getTrack());
    this.setColor();
  }

  setColor(newColor?: HexColor) {
    const color = newColor || this.carProps.color;
    this.carImage.style.fill = color;
  }

  async stop() {
    this.pauseAnimation = true;
    this.setWaiting();
    this.reset();

    const response = await stopEngine(this.carProps.id);
    if (!response.ok) {
      console.log(response);
    }

    this.unsetWaiting();
    this.positionStart();
  }

  async startEngine(): Promise<EngineData | null> {
    this.reset();
    this.positionStart();
    this.setWaiting();

    const engineData = (await startEngine(this.carProps.id)) as
      | EngineData
      | undefined;
    if (!engineData) return null;

    return engineData;
  }

  async drive(engineData: EngineData) {
    this.abortAnimation = false;
    this.pauseAnimation = false;
    this.unsetWaiting();

    this.animate(engineData);
    const driving: Response | undefined = await startDriving(
      this.carProps.id,
    );
    if (driving.ok) {
      if (!this.abortAnimation && !this.pauseAnimation)
        this.setFinished();
      return;
    }
    if (driving.status !== 500) {
      console.error(driving);
    }
    if (!this.abortAnimation && !this.pauseAnimation)
      this.setStopped();
    this.pauseAnimation = true;
    throw new Error('The car is suddenly stopped');
  }

  private animate({ distance, velocity }: EngineData) {
    const duration = distance / velocity;
    const start = performance.now();
    const end = start + duration;

    let trackClientWidth = this.element.clientWidth;
    let progress = 0;
    const drivingAnimation = (time: number) => {
      if (this.abortAnimation) return;

      if (!this.pauseAnimation) {
        progress = time >= end ? 1 : (time - start) / duration;
      }

      trackClientWidth = this.element.clientWidth || trackClientWidth;
      const trackLength = trackClientWidth - 100;

      const current = progress * trackLength;
      this.carImage.style.transform = `translate(${current}px)`;

      requestAnimationFrame(drivingAnimation);
    };
    const animationFrame = requestAnimationFrame(drivingAnimation);

    return animationFrame;
  }

  private setStopped() {
    this.element.classList.add(CLASS_NAMES.track.stopped);
  }

  private setFinished() {
    this.element.classList.add(CLASS_NAMES.track.finished);
  }

  private setWaiting() {
    this.setColor(GREY);
  }

  private unsetWaiting() {
    this.setColor();
  }

  private positionStart() {
    this.carImage.style.transform = '';
    this.abortAnimation = true;
  }

  private reset() {
    this.element.classList.remove(CLASS_NAMES.track.stopped);
    this.element.classList.remove(CLASS_NAMES.track.finished);
  }
}

function getTrack() {
  const element = createElement({
    tagName: 'div',
    className: CLASS_NAMES.track.basic,
  });
  element.innerHTML = carSvgText;
  const carImage = element.children[0] as SVGElement;
  carImage.classList.add('car__image');
  return { element, carImage };
}
