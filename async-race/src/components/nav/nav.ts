import './styles.css';
import { ViewName } from '../../types';
import { PubSub, createElement } from '../../utils';

const classNames = {
  menu: 'nav',
  item: {
    basic: 'nav__item',
    active: 'nav__item_active',
  },
};

const viewNames: ViewName[] = ['garage', 'winners'];
const defaultView = viewNames[0];

const navSwitchPub = new PubSub<ViewName>();

export class Nav {
  private element: HTMLElement;
  private items: Record<ViewName, HTMLElement>;
  private activeItem: HTMLElement;

  constructor() {
    this.items = {} as Record<ViewName, HTMLElement>;
    viewNames.forEach((viewName) => {
      this.items[viewName] = createNavItem(viewName);
    });

    this.activeItem = this.items[defaultView];

    this.element = createNavMenu(Object.values(this.items));

    const changeActiveItem = (viewName: ViewName) => {
      this.activeItem.classList.remove(classNames.item.active);
      this.activeItem = this.items[viewName];
      this.activeItem.classList.add(classNames.item.active);
    };
    navSwitchPub.subscribe(changeActiveItem);

    navSwitchPub.fire(defaultView);
  }

  getElement() {
    return this.element;
  }

  subscribe(fn: (arg: ViewName) => void) {
    navSwitchPub.subscribe(fn);
  }
}

function createNavMenu(items: HTMLElement[]): HTMLElement {
  return createElement({
    tagName: 'div',
    className: classNames.menu,
    children: items,
  });
}

function createNavItem(name: ViewName): HTMLElement {
  return createElement({
    tagName: 'div',
    className: classNames.item.basic,
    text: name[0].toUpperCase() + name.slice(1).toLowerCase(),
    onclick: () => {
      navSwitchPub.fire(name);
    },
  });
}
