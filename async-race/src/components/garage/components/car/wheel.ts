import { HexColor } from "../../../../types";
import { createElement } from "../../../common/createElement";

export class Wheel {
  readonly element: HTMLElement;

  constructor(color: HexColor) {
    this.element = createElement({
      tagName: 'img',
      className: 'car__image',
    })
    this.setColor(color);
  }

  setColor(color: HexColor) {
    this.element.style.backgroundColor = color;
  }
}
