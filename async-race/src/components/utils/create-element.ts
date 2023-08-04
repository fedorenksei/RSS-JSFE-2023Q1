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

export function getSpanElement() {
  return createElement({
    tagName: 'span',
  });
}
