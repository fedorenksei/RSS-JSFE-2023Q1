import { carSvgText } from "./car-icon";
import { HexColor } from "../../../../types";
import { createElement } from "../../../common/createElement";

export class Wheel {
  readonly element: HTMLElement;
  carImage: Element;

  constructor(color: HexColor) {
    this.element = createElement({
      tagName: 'div',
      className: 'car__track',
    })
    this.element.innerHTML = carSvgText;
    this.carImage = this.element.children[0];
    this.carImage.classList.add('car__image');
    this.setColor(color);
  }

  setColor(color: HexColor) {
    this.element.style.fill = color;
  }
}
