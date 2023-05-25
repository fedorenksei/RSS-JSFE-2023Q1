import './newGame.css';
import createElement from '../../createElement';
import * as counters from '../counters/counters';
import * as field from '../field/field';

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
const chosenMode = {};
selectMode('easy');
function selectMode(mode) {
  if (!MODES[mode]) return;
  Object.assign(chosenMode, MODES[mode]);
}

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
  abortGame();
});

const minesElement = createElement('select', ClASSES.mines);
const minesOptions = Array(MODES.hard.mines - MODES.easy.mines + 1)
  .fill(null)
  .map((v, index) => index + 10);
minesOptions.forEach((amount) => {
  const option = createElement('option');
  option.value = amount;
  option.textContent = amount;
  minesElement.append(option);
});
// eslint-disable-next-line prefer-arrow-callback, func-names
minesElement.addEventListener('change', function () {
  const value = parseInt(this.value, 10);
  if (Number.isNaN(value)) return;
  chosenMode.mines = value;
  abortGame();
});

const modeElement = createElement('select', ClASSES.mode);
['easy', 'medium', 'hard'].forEach((mode) => {
  const option = createElement('option');
  option.value = mode;
  option.textContent = mode;
  modeElement.append(option);
});
let currentSize = modeElement.value;
// eslint-disable-next-line prefer-arrow-callback, func-names
modeElement.addEventListener('change', function () {
  currentSize = this.value;
  selectMode(this.value);
  abortGame();
  minesElement.value = chosenMode.mines;
});

wrapperElement.append(modeElement, minesElement, buttonElement);

function abortGame() {
  modelApi.abortGame();
  field.reset(currentSize);
  counters.reset();
  counters.stopSecondCounter();
}

export function startGame() {
  // todo implement the mode choice
  // const mode = MODES.easy;

  modelApi.startGame(chosenMode);
  counters.reset();
  counters.continueSecondsCounter();
}

export function getElement() {
  return wrapperElement;
}
