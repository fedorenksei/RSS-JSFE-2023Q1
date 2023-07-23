import { CarParams, FormActionName, HTMLColorInputElement } from '../../../../types';
import { PubSub, createElement } from '../../../../utils';

const CLASS_NAMES = {
  element: 'form',
  disabled: 'form_inactive',
  button: 'form-button',
  textInput: 'text-input',
  colorInput: 'color-input',
};

class Form {
  protected element: HTMLElement;
  textInput: HTMLInputElement;
  colorInput: HTMLColorInputElement;
  submitButton: HTMLButtonElement;
  submission: PubSub<CarParams>;

  constructor(actionName: FormActionName) {
    ({
      element: this.element,
      textInput: this.textInput,
      colorInput: this.colorInput,
      submitButton: this.submitButton,
    } = getFormElements.call(this, actionName));
    this.submission = new PubSub<CarParams>();
  }

  getElement() {
    return this.element;
  }

  clear() {
    this.textInput.value = this.textInput.defaultValue;
    this.colorInput.value = this.colorInput.defaultValue;
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
    this.disable();
  }

  enable() {
    this.element.classList.remove('form_inactive');
    this.textInput.removeAttribute('disabled');
    this.colorInput.removeAttribute('disabled');
    this.submitButton.removeAttribute('disabled');
  }

  disable() {
    this.element.classList.add('form_inactive');
    this.textInput.setAttribute('disabled', '');
    this.colorInput.setAttribute('disabled', '');
    this.submitButton.setAttribute('disabled', '');
  }
}

function getFormElements(this: Form, actionName: FormActionName) {
  const textInput = getTextInput();
  const colorInput = getColorInput();
  const submitButton = getSubmitButton.call(this, { actionName, textInput, colorInput })
  const element = createElement({
    tagName: 'form',
    className: CLASS_NAMES.element,
    children: [textInput, colorInput, submitButton],
  });
  return { element, textInput, colorInput, submitButton };
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
    className: CLASS_NAMES.button,
    text: actionName,
    onclick: () => {
      this.submission.fire({
        name: textInput.value,
        color: colorInput.value,
      });
      this.clear();
    },
  });
  element.type = 'button';
  return element;
}

function getTextInput() {
  const element = createElement({
    tagName: 'input',
    className: CLASS_NAMES.textInput,
  });
  element.type = 'text';
  return element;
}

function getColorInput(): HTMLColorInputElement {
  const element = createElement({
    tagName: 'input',
    className: CLASS_NAMES.colorInput,
  }) as HTMLColorInputElement;
  element.type = 'color';
  element.defaultValue = '#000000';
  return element;
}
