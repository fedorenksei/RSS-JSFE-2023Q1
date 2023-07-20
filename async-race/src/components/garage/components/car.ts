import './styles.css';
import { CarData, HexColor } from '../../../types';
import { createElement } from '../../../utils';

export class Car {
  private props: CarData;
  private element: HTMLElement;

  constructor(props: CarData) {
    this.props = props;
    this.element = getCarElement(props)
  }

  getElement() {
    return this.element;
  }
}

function getCarElement(props: CarData): HTMLElement {
  return createElement({
    tagName: 'div',
    className: 'car',
    children: [
      getCarNameElement(props.name),
      getCarImg(props.color),
    ]
  })
}

function getCarNameElement(name: string) {
  return createElement({
    tagName: 'span',
    className: 'car__name',
    text: name,
  })
}

function getCarImg(color: HexColor) {
  const element = createElement({
    tagName: 'div',
    className: 'car__image',
  })
  element.style.backgroundColor = color;
  return element;
}
