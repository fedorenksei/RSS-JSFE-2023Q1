import { createElement } from './createElement';

export class TextElement {
  readonly element: HTMLElement;

  constructor(data: {
    tagName: keyof HTMLElementTagNameMap;
    text: string;
    className: string;
  }) {
    this.element = createElement(data);
  }

  setText(text: string) {
    this.element.innerText = text;
  }
}
