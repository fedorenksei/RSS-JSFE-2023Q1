import { createElement } from '../../../common/createElement';
import {
  addDisabling,
  addValueInterface,
} from '../../../common/mixins';

class TextInputBase {
  readonly element: HTMLInputElement;

  constructor(className?: string) {
    const data: {
      tagName: 'input';
      className?: string;
    } = {
      tagName: 'input',
    };
    if (className) data.className = className;
    this.element = createElement(data);
    this.element.type = 'text';
  }
}
export const TextInput = addValueInterface(
  addDisabling(TextInputBase),
);
