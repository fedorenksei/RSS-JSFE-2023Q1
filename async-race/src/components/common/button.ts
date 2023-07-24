import { createElement } from "./createElement";
import { addDisabling } from "./mixins";

class ButtonBase {
  readonly element: HTMLButtonElement;

  constructor(data: { text: string; className: string; onclick: () => void }) {
    const tag: { tagName: 'button' } = { tagName: 'button' };
    this.element = createElement(Object.assign(data, tag));
    this.element.type = 'button';
  }
}
export const Button = addDisabling(ButtonBase);
