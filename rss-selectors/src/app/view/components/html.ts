import { Task } from "../../types";

class Html {
  element: HTMLDivElement;
  hoverHandler?: (data: string) => void;
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('html')
    this.element.addEventListener('mouseover', () => {
      if (this.hoverHandler) this.hoverHandler('hello form html');
    })
  }

  getElement() {
    return this.element;
  }

  setHoverHandler(handler: (data: string) => void) {
    this.hoverHandler = handler;
  }

  setContentByTask(task: Task) {
    this.element.innerHTML = getContentByTask(task);
  }
}

export default function create() {
  return new Html();
}

function getContentByTask(task: Task) {
  return JSON.stringify(task);
}
