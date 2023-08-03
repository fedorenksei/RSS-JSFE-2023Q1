import './styles.css';
import {
  CarParams,
  FormActionName,
  HTMLColorInputElement,
} from '../../../../types';
import { PubSub } from '../../../../utils';
import { Button } from '../../../common/button/button';
import { createElement } from '../../../common/createElement';
import { TextInput } from './textInput';
import { ColorInput } from './colorInput';

const CLASS_NAMES = {
  element: 'form',
  disabled: 'form_inactive',
  buttons: {
    create: 'create-button',
    update: 'update-button',
  },
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
    this.textInput = getTextInput();
    this.colorInput = getColorInput();
    this.submitButton = getSubmitButton.call(this, {
      actionName,
      textInput: this.textInput.element,
      colorInput: this.colorInput.element,
    });
    this.element = getFormElement.call(this);
    this.submission = new PubSub<CarParams>();
  }

  clear() {
    this.textInput.setDefaultValue();
    this.colorInput.setDefaultValue();
  }

  enable() {
    this.element.classList.remove('form_inactive');
    [this.textInput, this.colorInput, this.submitButton].forEach(
      (item) => {
        item.enable();
      },
    );
  }

  disable() {
    this.element.classList.add('form_inactive');
    [this.textInput, this.colorInput, this.submitButton].forEach(
      (item) => {
        item.disable();
      },
    );
  }
}

function getFormElement(this: Form) {
  const element = createElement({
    tagName: 'form',
    className: CLASS_NAMES.element,
    children: [
      this.textInput.element,
      this.colorInput.element,
      this.submitButton.element,
    ],
  });
  return element;
}

function getSubmitButton(
  this: Form,
  {
    actionName,
    textInput,
    colorInput,
  }: {
    actionName: FormActionName;
    textInput: HTMLInputElement;
    colorInput: HTMLColorInputElement;
  },
) {
  return new Button({
    className: CLASS_NAMES.buttons[actionName],
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
