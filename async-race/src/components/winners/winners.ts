import { createElement } from "../../utils";

export class Winners {
  private element: HTMLElement;

  constructor() {
    this.element = getWinnersElement();
  }

  getElement() {
    return this.element;
  }
}

function getWinnersElement() {
  return createElement({
    tagName: 'section',
    className: 'winners',
    text: 'Winners',
  })
}
