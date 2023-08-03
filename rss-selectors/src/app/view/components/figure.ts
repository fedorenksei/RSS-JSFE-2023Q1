import { Task } from '../../types';

class Figure {
  element: HTMLDivElement;
  hoverHandler?: (data: string) => void;
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('figure');
    this.element.addEventListener('mouseover', () => {
      if (this.hoverHandler) this.hoverHandler('hello form table');
    });
  }

  getElement() {
    return this.element;
  }

  setHoverHandler(handler: (data: string) => void) {
    this.hoverHandler = handler;
  }

  setContentByTask(task: Task) {
    this.element.innerText = getContentByTask(task);
  }
}

export default function create() {
  return new Figure();
}

function getContentByTask(task: Task) {
  return JSON.stringify(task);
}
