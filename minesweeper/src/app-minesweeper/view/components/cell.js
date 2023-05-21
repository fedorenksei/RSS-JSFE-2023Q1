import createElement from '../createElement';
import * as newGame from './newGame';

const CLASSES = {
  cell: 'minesweeper-field__cell cell',
  revealedCell: 'cell_revealed',
};

let modelApi;
export function init(api) {
  modelApi = api;
}

export function create(id) {
  const element = createCellElement();
  element.addEventListener('click', () => { clickHandler(id); });

  return {
    setValue(value) {
      element.classList.add(CLASSES.revealedCell);
      element.textContent = value;
    },
    getElement: () => element,
  };
}

function clickHandler(id) {
  if (!modelApi.isGameNow) {
    newGame.startGame(id);
  }
  modelApi.openCell(id);
}

function createCellElement() {
  return createElement('div', CLASSES.cell);
}
