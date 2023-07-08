class Hint {
  button: HTMLButtonElement;
  isUsed: boolean;
  handler?: () => void;
  constructor() {
    this.button = createButton();
    this.isUsed = false;
    this.button.addEventListener('click', () => {
      this.isUsed = true;
      if (this.handler) this.handler();
    })
  }

  getElement() {
    return this.button;
  }

  setHandler(callback: () => void) {
    this.handler = callback;
  }
}

export default function create() {
  return new Hint();
}

function createButton() {
  const element = document.createElement('button');
  element.classList.add('help')
  element.innerText = 'Help';
  return element;
}
