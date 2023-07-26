import { createElement } from "../../../common/createElement";

export class Total {
  readonly element: HTMLElement;
  private counterElement: HTMLElement;
  private counter: number;

  constructor() {
    this.counter = 0;
    this.element = getElement();
    this.counterElement = getCounter();
    this.element.append(this.counterElement);
    this.update();
  }

  set(amount: number) {
    this.counter = amount;
    this.update();
  }

  plusOne() {
    this.counter++;
    this.update();
  }

  minusOne() {
    this.counter--;
    this.update();
  }
  
  private update() {
    this.counterElement.innerText = this.counter.toString();
  }
}

function getElement() {
  return createElement({
    tagName: 'p',
    text: 'Total of cars: '
  })
}

function getCounter() {
  return createElement({
    tagName: 'span',
  });
}