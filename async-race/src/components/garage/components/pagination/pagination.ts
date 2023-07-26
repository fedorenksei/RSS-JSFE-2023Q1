import { createElement } from "../../../common/createElement";

const CLASS_NAMES = {
  basic: 'pagination',
}

export class Pages {
  protected element: HTMLElement;

  constructor() {
    this.element = getPaginationElement();
  }
}

function getPaginationElement() {
  return createElement({
    tagName: 'div',
    className: CLASS_NAMES.basic,
    children: [],
  })
}
