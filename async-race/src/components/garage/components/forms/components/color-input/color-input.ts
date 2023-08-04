import { HTMLColorInputElement } from '../../../../../../types';
import { createElement } from '../../../../../utils/create-element';
import {
  addDisabling,
  addValueInterface,
} from '../../../../../utils/mixins';

class ColorInputBase {
  readonly element: HTMLColorInputElement;

  constructor(className?: string) {
    const data: {
      tagName: 'input';
      className?: string;
    } = {
      tagName: 'input',
    };
    if (className) data.className = className;
    this.element = createElement(data) as HTMLColorInputElement;
    this.element.type = 'color';
    this.element.defaultValue = '#000000';
  }
}
export const ColorInput = addValueInterface(
  addDisabling(ColorInputBase),
);
