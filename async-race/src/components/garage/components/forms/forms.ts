import { CarParams, FormActionName, HTMLColorInputElement } from '../../../../types';
import { PubSub } from '../../../../utils';
import { Button } from '../../../common/button';
import { createElement } from '../../../common/createElement';
import { ColorInput, TextInput } from './input';

const CLASS_NAMES = {
  element: 'form',
  disabled: 'form_inactive',
  button: 'form-button',
  textInput: 'text-input',
  colorInput: 'color-input',
};

export class Form {
  readonly element: HTMLElement;
  textInput: InstanceType<typeof TextInput>;
  colorInput: InstanceType<typeof ColorInput>;
  submitButton: InstanceType<typeof Button>;
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

  clear() {
    this.textInput.setDefaultValue();
    this.colorInput.setDefaultValue();
  }

  enable() {
    this.element.classList.remove('form_inactive');
    [this.textInput, this.colorInput, this.submitButton].forEach((item) => {
      item.enable();
    });
  }

  disable() {
    this.element.classList.add('form_inactive');
    [this.textInput, this.colorInput, this.submitButton].forEach((item) => {
      item.disable();
    });
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
}

function getFormElements(this: Form, actionName: FormActionName) {
  const textInput = getTextInput();
  const colorInput = getColorInput();
  const submitButton = getSubmitButton.call(this, { actionName, textInput: textInput.element, colorInput: colorInput.element, });
  const element = createElement({
    tagName: 'form',
    className: CLASS_NAMES.element,
    children: [textInput.element, colorInput.element, submitButton.element],
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
  return new Button({
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
}

function getTextInput() {
  return new TextInput(CLASS_NAMES.textInput);
}

function getColorInput() {
  return new ColorInput(CLASS_NAMES.colorInput);
}
