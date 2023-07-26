import './styles.css';
import { PaginationActionName } from '../../../types';
import { PubSub } from '../../../utils';
import { Button } from '../button/button';
import { createElement } from '../createElement';

const CLASS_NAMES = {
  pagination: {
    basic: 'pagination',
  },
  page: {
    basic: 'pagination__page',
  },
  buttons: {
    next: 'next-button',
    previous: 'prev-button',
  },
  wrapper: 'pagination__wrapper',
};

export class Pagination {
  readonly element: HTMLElement;
  private itemElementsByPage: Map<number, HTMLElement[]>;
  private pageByItemElement: Map<HTMLElement, number>;
  private pageElements: Map<number, HTMLElement>;
  private pageWrapper: HTMLElement;
  private buttons: {
    next: InstanceType<typeof Button>;
    previous: InstanceType<typeof Button>;
  };
  private navEvent: PubSub<PaginationActionName>;
  private currentPage?: number;
  private itemsOnPage: number;

  constructor(itemsOnPage: number) {
    this.itemsOnPage = itemsOnPage;
    this.navEvent = new PubSub<PaginationActionName>();
    this.navEvent.subscribe((actionName: PaginationActionName) => {this.navigate(actionName)})
    this.buttons = {
      next: getButton('next', () => {
        this.navEvent.fire('next');
      }),
      previous: getButton('previous', () => {
        this.navEvent.fire('previous');
      }),
    };
    this.buttons.previous.disable();
    this.buttons.next.disable();

    this.pageWrapper = getWrapper();
    this.element = getPaginationElement([this.pageWrapper, this.buttons.previous.element, this.buttons.next.element]);
    this.pageElements = new Map();
    this.itemElementsByPage = new Map();
    this.pageByItemElement = new Map();
  }

  addPage(itemElements: HTMLElement[]) {
    const pageElement = getPageElement(itemElements);
    const newPageNumber = this.pageCount + 1;
    this.pageElements.set(newPageNumber, pageElement);

    this.itemElementsByPage.set(newPageNumber, itemElements);
    itemElements.forEach(itemElement => {
      this.pageByItemElement.set(itemElement, newPageNumber);
    })

    if (this.pageCount === 1) {
      this.setPage(1);
    }
    if (this.pageCount > 1) {this.buttons.next.enable()}
  }

  addItem(itemElement: HTMLElement) {
    const lastPageElements = this.itemElementsByPage.get(this.pageCount);
    if (!lastPageElements) return;
    if (lastPageElements.length >= this.itemsOnPage) {
      this.addPage([itemElement]);
    } else {
      this.itemElementsByPage.get(this.pageCount)?.push(itemElement);
      this.pageByItemElement.set(itemElement, this.pageCount);
      this.pageElements.get(this.pageCount)?.append(itemElement);
    }
  }

  // removeItem(itemElement: HTMLElement) {}

  navigate(actionName: PaginationActionName): void {
    if (!this.currentPage) return;
    const targetPage = this.currentPage + (actionName === 'next' ? 1 : -1);
    if (targetPage <= 0 || targetPage > this.pageCount) return;
    this.setPage(targetPage);
    if (targetPage === 1) {
      this.buttons.previous.disable();
    }
    if (targetPage > 1) {
      this.buttons.previous.enable();
    }
    if (targetPage === this.pageCount) {
      this.buttons.next.disable();
    }
    if (targetPage < this.pageCount) {
      this.buttons.next.enable();
    }
  }

  setPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    const pageElement = this.getPage(pageNumber);
    if (!pageElement) return;
    this.pageWrapper.replaceChildren(pageElement);
  }

  private get pageCount(): number {
    return this.pageElements.size;
  }

  private getPage(pageNumber: number): HTMLElement | undefined {
    return this.pageElements.get(pageNumber);
  }
}

function getPaginationElement(children: HTMLElement[]): HTMLElement {
  return createElement({
    tagName: 'div',
    className: CLASS_NAMES.pagination.basic,
    children,
  });
}

function getPageElement(children: HTMLElement[]): HTMLElement {
  return createElement({
    tagName: 'div',
    className: CLASS_NAMES.page.basic,
    children,
  });
}

function getButton(actionName: PaginationActionName, onclick: () => void): InstanceType<typeof Button> {
  return new Button({
    text: actionName,
    className: CLASS_NAMES.buttons[actionName],
    onclick,
  });
}

function getWrapper(): HTMLElement {
  return createElement({ tagName: 'div', className: CLASS_NAMES.wrapper });
}
