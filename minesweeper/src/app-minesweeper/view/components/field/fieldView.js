import './field.css';
import createElement from '../../createElement';
import * as cellFactory from './cell/cell';

let modelApi;
export function init(api) {
  modelApi = api;
  createAllCells();

  if (!modelApi.currentGame) {
    setSize('small');
  }
}

const MAX_CELLS = 25 ** 2;
const CLASSES = {
  fieldInit: 'minesweeper__field minesweeper-field',
  fieldSizes: {
    easy: 'minesweeper-field_size_small',
    medium: 'minesweeper-field_size_medium',
    hard: 'minesweeper-field_size_large',
  },
  disabled: 'minesweeper-field_disabled',
};
const fieldElement = createElement('div', CLASSES.fieldInit);

const cellById = new Map();
export function getCellsMap() {
  return cellById;
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

export function setSize(size) {
  Object.entries(CLASSES.fieldSizes).forEach(([key, value]) => {
    if (key === size) {
      fieldElement.classList.add(value);
    } else {
      fieldElement.classList.remove(value);
    }
  });
}

export function disableField() {
  fieldElement.classList.add(CLASSES.disabled);
}

export function activateField() {
  fieldElement.classList.remove(CLASSES.disabled);
}

export function getElement() {
  return fieldElement;
}
