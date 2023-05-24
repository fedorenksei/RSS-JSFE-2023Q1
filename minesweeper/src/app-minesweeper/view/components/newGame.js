import * as counters from './counters/counters';

const MODES = {
  easy: {
    size: 10,
    mines: 10,
  },
  medium: {
    size: 15,
    mines: 30,
  },
  hard: {
    size: 25,
    mines: 99,
  },
};

let modelApi;
export function init(api) {
  modelApi = api;
}

export function startGame() {
  // todo implement the mode choice
  const mode = MODES.easy;

  modelApi.startGame(mode);
  counters.reset();
}
