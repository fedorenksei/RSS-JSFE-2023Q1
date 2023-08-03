import './styles.css';
import { createElement } from '../createElement';
import { addDisabling } from '../mixins';

class ButtonBase {
  readonly element: HTMLButtonElement;

  constructor(data: {
    text: string;
    className: string;
    onclick: () => void;
  }) {
    const tag: { tagName: 'button' } = { tagName: 'button' };
    this.element = createElement(Object.assign(data, tag));
    this.element.type = 'button';
    this.element.classList.add('button');
  }

  setWaiting() {
    this.element.classList.add('button_waiting');
  }

  unsetWaiting() {
    this.element.classList.remove('button_waiting');
  }
}
export const Button = addDisabling(ButtonBase);
