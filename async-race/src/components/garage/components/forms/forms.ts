import { CarParams, FormActionName, HTMLColorInputElement } from '../../../../types';
import { PubSub, createElement } from '../../../../utils';

class Form {
  private element: HTMLElement;
  submission: PubSub<CarParams>;

  constructor(actionName: FormActionName) {
    this.element = getFormElement.call(this, actionName);
    this.submission = new PubSub<CarParams>();
  }

  getElement() {
    return this.element;
  }
}

export class CreateForm extends Form {
  constructor() {
    super('create');
  }
}

export class UpdateForm extends Form {
  constructor() {
    super('update');
  }
}

function getFormElement(this: Form, actionName: FormActionName) {
  const textInput = getTextInput();
  const colorInput = getColorInput();
  const element = createElement({
    tagName: 'form',
    className: 'form',
    children: [textInput, colorInput, getSubmitButton.call(this, { actionName, textInput, colorInput })],
  });
  return element;
}

function getSubmitButton(
  this: Form,
  {
    actionName,
    textInput,
    colorInput,
  }: { actionName: FormActionName; textInput: HTMLInputElement; colorInput: HTMLColorInputElement }
) {
  const element = createElement({
    tagName: 'button',
    className: 'form-button',
    text: actionName,
    onclick: () => {
      this.submission.fire({
        name: textInput.value,
        color: colorInput.value,
      });
      textInput.value = textInput.defaultValue;
      colorInput.value = colorInput.defaultValue;
    },
  });
  element.type = 'button';
  return element;
}

function getTextInput() {
  const element = createElement({
    tagName: 'input',
    className: 'text-input',
  });
  element.type = 'text';
  return element;
}

function getColorInput(): HTMLColorInputElement {
  const element = createElement({
    tagName: 'input',
    className: 'color-input',
  }) as HTMLColorInputElement;
  element.type = 'color';
  element.defaultValue = '#000000';
  return element;
}
