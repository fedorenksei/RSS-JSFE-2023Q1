import View from './view';

export default class Game {
  constructor(size) {
    this.view = new View(size);
  }

  getElement() {
    return this.view.getElement();
  }
}
