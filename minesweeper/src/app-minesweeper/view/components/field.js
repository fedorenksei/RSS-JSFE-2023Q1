import './field.css';
import createElement from '../createElement';
import * as cellFactory from './cell';

const MAX_CELLS = 25 ** 2;
const CLASSES = {
  fieldInit: 'minesweeper__field minesweeper-field',
  fieldSizes: {
    small: 'minesweeper-field_size_small',
    medium: 'minesweeper-field_size_medium',
    large: 'minesweeper-field_size_large',
  },
};

let modelApi;
const fieldElement = createElement('div', CLASSES.fieldInit);
const cellById = new Map();

export function init(api) {
  modelApi = api;

  createAllCells();

  if (!modelApi.currentGame) {
    setSize('small');
  }
}

function createAllCells() {
  let currentId = 0;
  const cellElements = [];
  for (let index = 0; index < MAX_CELLS; index += 1, currentId += 1) {
    const cell = cellFactory.create(currentId);
    cellById.set(currentId, cell);
    cellElements.push(cell.getElement());
  }
  fieldElement.replaceChildren(...cellElements);
}

function setSize(size) {
  Object.entries(CLASSES.fieldSizes).forEach(([key, value]) => {
    if (key === size) {
      fieldElement.classList.add(value);
    } else {
      fieldElement.classList.remove(value);
    }
  });
}

export function revealCell({ primaryCell }) {
  const cell = cellById.get(primaryCell.id);
  cell.setValue(primaryCell.value);
  // todo: secondaryCells
}

export function revealField() {}

export function getElement() {
  return fieldElement;
}
