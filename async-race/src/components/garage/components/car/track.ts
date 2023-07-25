import { carSvgText } from './car-icon';
import { CarData, EngineData, HexColor } from '../../../../types';
import { createElement } from '../../../common/createElement';
import { startDriving, startEngine } from '../../../../http-requests';

const CLASS_NAMES = {
  track: {
    basic: 'car__track',
    stopped: 'car__track_stopped',
    finished: 'car__track_finished',
  },
  image: 'car__image',
}

export class Track {
  private carProps: CarData;
  readonly element: HTMLElement;
  carImage: SVGElement;

  constructor(props: CarData) {
    this.carProps = props;
    ({ element: this.element, carImage: this.carImage } = getTrack());
    this.setColor(props.color);
  }

  setColor(color: HexColor) {
    this.carImage.style.fill = color;
  }

  setStopped() {
    this.element.classList.add(CLASS_NAMES.track.stopped)
  }

  setFinished() {
    this.element.classList.add(CLASS_NAMES.track.finished)
  }
  
  reset() {
    this.element.classList.remove(CLASS_NAMES.track.stopped)
    this.element.classList.remove(CLASS_NAMES.track.finished)
  }

  async start(): Promise<boolean> {
    this.reset();

    const engineData = (await startEngine(this.carProps.id)) as EngineData | undefined;
    if (!engineData) return false;

    const animationState = {
      stop: false,
    }
    this.drive(engineData, animationState);
    const driving: Response | undefined = await startDriving(this.carProps.id);
    if (driving.ok) {
      this.setFinished();
      return true;
    }

    if (driving.status !== 500) {
      console.error(driving);
    }
    this.setStopped();
    animationState.stop = true;
    return false;
  }

  private drive({ distance, velocity }: EngineData, animationState: {stop: boolean}) {
    const duration = distance / velocity;
    const start = performance.now();
    const end = start + duration;

    let trackClientWidth = this.element.clientWidth;
    const drivingAnimation = (time: number) => {
      if (time >= end
        || animationState.stop
      ) return;

      const progress = (time - start) / duration;
      trackClientWidth = this.element.clientWidth || trackClientWidth;
      const trackLength = trackClientWidth - 100;
      const current = progress * trackLength;
      this.carImage.style.transform = `translate(${current}px)`
      requestAnimationFrame(drivingAnimation)
    }
    const animationFrame = requestAnimationFrame(drivingAnimation);

    return animationFrame;
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
