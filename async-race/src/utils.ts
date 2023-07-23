export class PubSub<Detail> {
  handlers: Set<(arg: Detail) => void>;
  constructor() {
    this.handlers = new Set();
  }

  subscribe(fn: (arg: Detail) => void) {
    this.handlers.add(fn);
  }

  unsubscribe(fn: (arg: Detail) => void) {
    this.handlers.delete(fn);
  }

  fire(detail: Detail) {
    this.handlers.forEach((handler) => {
      handler(detail);
    });
  }
}

export function createElement<K extends keyof HTMLElementTagNameMap>({
  tagName,
  className,
  text,
  children,
  onclick,
}: {
  tagName: K;
  className?: string;
  text?: string;
  children?: HTMLElement[];
  onclick?: () => void;
}): HTMLElementTagNameMap[K] {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (text) element.innerText = text;
  if (children) element.append(...children);
  if (onclick) element.addEventListener('click', onclick);
  return element;
}

export class Button {
  private element: HTMLButtonElement;

  constructor(data: { text: string; className: string; onclick: () => void }) {
    const tag: { tagName: 'button' } = { tagName: 'button' };
    this.element = createElement(Object.assign(data, tag));
  }

  getElement() {
    return this.element;
  }

  disable() {
    this.element.setAttribute('disabled', '');
  }

  enable() {
    this.element.removeAttribute('disabled');
  }
}

export class TextElement {
  private element: HTMLElement;

  constructor(data: {
    tagName: keyof HTMLElementTagNameMap;
    text: string;
    className: string;
  }) {
    this.element = createElement(data);
  }

  getElement() {
    return this.element;
  }

  setText(text: string) {
    this.element.innerText = text;
  }
}
