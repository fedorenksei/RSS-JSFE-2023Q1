import './styles.css';
import { ViewName } from '../../types';
import { PubSub } from '../../utils';
import { createElement } from '../common/createElement';

const classNames = {
  menu: 'nav',
  item: {
    basic: 'nav__item',
    active: 'nav__item_active',
  },
};

const viewNames: ViewName[] = ['garage', 'winners'];
const defaultView = viewNames[0];

export class Nav {
  readonly element: HTMLElement;

  private items: Record<ViewName, HTMLElement>;

  private activeItem: HTMLElement;

  private event: PubSub<ViewName>;

  constructor() {
    this.event = new PubSub<ViewName>();

    this.items = {} as Record<ViewName, HTMLElement>;
    viewNames.forEach((viewName) => {
      this.items[viewName] = createNavItem(viewName, () => {
        this.event.fire(viewName);
      });
    });

    this.activeItem = this.items[defaultView];

    this.element = createNavMenu(Object.values(this.items));

    const changeActiveItem = (viewName: ViewName) => {
      this.activeItem.classList.remove(classNames.item.active);
      this.activeItem = this.items[viewName];
      this.activeItem.classList.add(classNames.item.active);
    };
    this.event.subscribe(changeActiveItem);
  }

  init() {
    this.event.fire(defaultView);
  }

  subscribe(fn: (arg: ViewName) => void) {
    this.event.subscribe(fn);
  }
}

function createNavMenu(items: HTMLElement[]): HTMLElement {
  return createElement({
    tagName: 'div',
    className: classNames.menu,
    children: items,
  });
}

function createNavItem(
  name: ViewName,
  onclick: () => void,
): HTMLElement {
  return createElement({
    tagName: 'div',
    className: classNames.item.basic,
    text: name[0].toUpperCase() + name.slice(1).toLowerCase(),
    onclick,
  });
}
