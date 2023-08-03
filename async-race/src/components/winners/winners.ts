import { createElement } from '../common/createElement';

export class Winners {
  readonly element: HTMLElement;

  constructor() {
    this.element = getWinnersElement();
  }
}

function getWinnersElement() {
  return createElement({
    tagName: 'section',
    className: 'winners',
    text: 'Winners',
  });
}
