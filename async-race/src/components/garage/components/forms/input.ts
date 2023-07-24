import { HTMLColorInputElement } from "../../../../types";
import { createElement } from "../../../common/createElement";
import { addDisabling, addValueInterface } from "../../../common/mixins";

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
export const TextInput = addValueInterface(addDisabling(TextInputBase))

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
export const ColorInput = addValueInterface(addDisabling(ColorInputBase))
