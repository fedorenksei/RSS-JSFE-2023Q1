import './newGame.css';
import createElement from '../createElement';
import * as counters from './counters/counters';
import * as field from './field/field';

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
let chosenMode = MODES.easy;

let modelApi;
export function init(api) {
  modelApi = api;
}

const ClASSES = {
  wrapper: 'new-game',
  button: 'new-game__button',
  mode: 'new-game__mode',
  mines: 'new-game__mines',
};
const wrapperElement = createElement('div', ClASSES.wrapper);
const buttonElement = createElement('div', ClASSES.button);
buttonElement.textContent = 'New game';
buttonElement.addEventListener('click', () => {
  modelApi.abortGame();
  field.reset();
  counters.reset();
  counters.stopSecondCounter();
});

const modeElement = createElement('select', ClASSES.mode);
['easy', 'medium', 'hard'].forEach((mode) => {
  const option = createElement('option');
  option.value = mode;
  option.textContent = mode;
  modeElement.append(option);
});

const minesElement = createElement('div', ClASSES.mines);
wrapperElement.append(modeElement, minesElement, buttonElement);

export function getElement() {
  return wrapperElement;
}

export function startGame() {
  // todo implement the mode choice
  const mode = MODES.easy;

  modelApi.startGame(mode);
  counters.reset();
  counters.continueSecondsCounter();
}
