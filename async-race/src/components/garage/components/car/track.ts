import { carSvgText } from './car-icon';
import { CarData, EngineData, HexColor } from '../../../../types';
import { createElement } from '../../../common/createElement';
import { startDriving, startEngine } from '../../../../http-requests';

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

  async start() {
    const engineData = (await startEngine(this.carProps.id)) as EngineData | undefined;
    if (!engineData) return;

    const drivingAnimation = this.drive(engineData);
    const driving: Response = await startDriving(this.carProps.id);
    if (driving.status === 500) {
      cancelAnimationFrame(drivingAnimation)
      return;
    }
    if (!driving.ok) {
      console.error(driving);
      return;
    }
  }

  private drive({ distance, velocity }: EngineData) {
    const duration = distance / velocity;
    const start = performance.now();
    const end = start + duration;

    const func = (time: number) => {
      if (time >= end) {
        // cancelAnimationFrame(animationFrame);
        return;
      }

      const progress = (time - start) / duration;
      const trackLength = this.element.clientWidth - 100;
      const current = progress * trackLength;
      console.log({start, end, duration, time, progress, trackLength, current})
      this.carImage.style.transform = `translate(${current}px)`
      requestAnimationFrame(func)
    }
    const animationFrame = requestAnimationFrame(func);

    return animationFrame;
  }
}

function getTrack() {
  const element = createElement({
    tagName: 'div',
    className: 'car__track',
  });
  element.innerHTML = carSvgText;
  const carImage = element.children[0] as SVGElement;
  carImage.classList.add('car__image');
  return { element, carImage };
}
