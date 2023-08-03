class Input {
  element: HTMLDivElement;
  input: HTMLInputElement;
  button: HTMLButtonElement;
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('input');
    this.input = document.createElement('input');
    this.button = createButton();
    this.element.append(this.input, this.button);
  }

  getElement() {
    return this.element;
  }

  getText() {
    return this.input.value;
  }

  setSubmissionCallback(handler: (input: string) => void) {
    const callback = () => {
      handler(this.getText());
    };

    this.button.addEventListener('click', callback);

    document.addEventListener('keypress', (event) => {
      if (event.code !== 'Enter') return;
      callback();
    });
  }

  showFailure() {
    this.input.classList.add('failure');
  }

  displayHint(hint: string) {
    this.input.value = hint;
  }

  addHintButton(element: HTMLElement) {
    this.element.append(element);
    console.log(element);
  }

  clear() {
    this.input.value = '';
  }
}

export default function create() {
  return new Input();
}

function createButton() {
  const element = document.createElement('button');
  element.type = 'submit';
  element.innerText = 'Enter';
  return element;
}
