import './styles.css';
import { PaginationActionName } from '../../../types';
import { PubSub } from '../../../utils';
import { Button } from '../button/button';
import { createElement, getSpanElement } from '../createElement';

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
  pageInfo: 'pagination__page-info',
};

export class Pagination {
  readonly element: HTMLElement;

  private itemElementsByPage: Map<number, HTMLElement[]>;

  private pageByItemElement: Map<HTMLElement, number>;

  private pageElements: Map<number, HTMLElement>;

  private pageWrapper: HTMLElement;

  private currentPageElement: HTMLElement;

  private pageCounterElement: HTMLElement;

  private buttons: {
    next: InstanceType<typeof Button>;
    previous: InstanceType<typeof Button>;
  };

  private navEvent: PubSub<PaginationActionName>;

  private currentPage: number;

  private itemsOnPage: number;

  constructor(itemsOnPage: number) {
    this.itemsOnPage = itemsOnPage;
    this.currentPage = 1;
    this.navEvent = new PubSub<PaginationActionName>();
    this.navEvent.subscribe((actionName: PaginationActionName) => {
      this.navigate(actionName);
    });
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
    this.currentPageElement = getSpanElement();
    this.pageCounterElement = getSpanElement();
    const pageInfo = getPageInfoElement({
      current: this.currentPageElement,
      total: this.pageCounterElement,
    });
    this.element = getPaginationElement([
      this.pageWrapper,
      this.buttons.previous.element,
      this.buttons.next.element,
      pageInfo,
    ]);
    this.pageElements = new Map();
    this.itemElementsByPage = new Map();
    this.pageByItemElement = new Map();
  }

  getCurrentPageItems() {
    return this.itemElementsByPage.get(this.currentPage);
  }

  addPage(itemElements: HTMLElement[]) {
    const pageElement = getPageElement(itemElements);
    const newPageNumber = this.pageCount + 1;
    this.pageElements.set(newPageNumber, pageElement);

    this.itemElementsByPage.set(newPageNumber, itemElements);
    itemElements.forEach((itemElement) => {
      this.pageByItemElement.set(itemElement, newPageNumber);
    });

    if (this.pageCount === 1) {
      this.setPage(1);
    } else {
      this.updateButtons();
    }
  }

  addItem(itemElement: HTMLElement): void {
    const lastPageElements = this.itemElementsByPage.get(
      this.pageCount,
    );
    const isLastPageFull =
      lastPageElements && lastPageElements.length >= this.itemsOnPage;
    if (this.pageCount === 0 || isLastPageFull) {
      this.addPage([itemElement]);
    } else {
      this.addElementOnPage(itemElement, this.pageCount);
    }
  }

  removeItem(itemElement: HTMLElement): void {
    const pageNumber = this.pageByItemElement.get(itemElement);
    if (typeof pageNumber !== 'number') return;
    const elementsOfPage = this.itemElementsByPage.get(pageNumber);
    if (!elementsOfPage) return;
    const pageElement = this.pageElements.get(pageNumber);
    if (!pageElement) return;

    (() => {
      const nextPage = pageNumber + 1;
      const elementsOfNextPage =
        this.itemElementsByPage.get(nextPage);
      if (!elementsOfNextPage) return;
      const firstElementOnNextPage = elementsOfNextPage.shift();
      if (!firstElementOnNextPage) return;

      this.addElementOnPage(firstElementOnNextPage, pageNumber);

      const isPageDeleted = this.deletePage(nextPage);
      if (!isPageDeleted) return;
      this.updateButtons();
    })();

    itemElement.remove();
    elementsOfPage.splice(elementsOfPage.indexOf(itemElement), 1);
    this.pageByItemElement.delete(itemElement);

    const isPageDeleted = this.deletePage(pageNumber);
    if (!isPageDeleted) return;
    if (this.currentPage !== 1) this.setPage(pageNumber - 1);
    this.updateButtons();
  }

  private addElementOnPage(
    itemElement: HTMLElement,
    pageNumber: number,
  ) {
    const pageElement = this.pageElements.get(pageNumber);
    if (!pageElement) return;
    const itemElementsOfPage =
      this.itemElementsByPage.get(pageNumber);
    if (!itemElementsOfPage) return;

    itemElementsOfPage.push(itemElement);
    this.pageByItemElement.set(itemElement, pageNumber);
    pageElement.append(itemElement);
  }

  private deletePage(pageNumber: number): boolean {
    const pageElement = this.pageElements.get(pageNumber);
    if (!pageElement) return false;

    const itemElements = this.itemElementsByPage.get(pageNumber);
    if (!itemElements) return false;

    if (itemElements.length) return false;

    pageElement.remove();
    this.pageElements.delete(pageNumber);
    this.itemElementsByPage.delete(pageNumber);
    return true;
  }

  private navigate(actionName: PaginationActionName): void {
    if (!this.currentPage) return;
    const targetPage =
      this.currentPage + (actionName === 'next' ? 1 : -1);
    if (targetPage <= 0 || targetPage > this.pageCount) return;
    this.setPage(targetPage);
  }

  private updateButtons(): void {
    this.currentPageElement.innerText = (
      this.currentPage || 1
    ).toString();
    this.pageCounterElement.innerText = (
      this.pageCount || 1
    ).toString();

    if (typeof this.currentPage !== 'number') {
      this.buttons.previous.disable();
      this.buttons.next.disable();
      return;
    }

    if (this.currentPage === 1) {
      this.buttons.previous.disable();
    }
    if (this.currentPage > 1) {
      this.buttons.previous.enable();
    }
    if (this.currentPage === this.pageCount) {
      this.buttons.next.disable();
    }
    if (this.currentPage < this.pageCount) {
      this.buttons.next.enable();
    }
  }

  private setPage(pageNumber: number): void {
    const pageElement = this.getPage(pageNumber);
    if (!pageElement) return;
    this.pageWrapper.replaceChildren(pageElement);
    this.currentPage = pageNumber;
    this.updateButtons();
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

function getButton(
  actionName: PaginationActionName,
  onclick: () => void,
): InstanceType<typeof Button> {
  return new Button({
    text: actionName,
    className: CLASS_NAMES.buttons[actionName],
    onclick,
  });
}

function getWrapper(): HTMLElement {
  return createElement({
    tagName: 'div',
    className: CLASS_NAMES.wrapper,
  });
}

function getPageInfoElement({
  current,
  total,
}: {
  current: HTMLElement;
  total: HTMLElement;
}): HTMLElement {
  const element = createElement({
    tagName: 'p',
    className: CLASS_NAMES.pageInfo,
    text: 'Page ',
  });
  element.append(current);
  const separator = document.createTextNode(' / ');
  element.append(separator);
  element.append(total);
  return element;
}
