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
