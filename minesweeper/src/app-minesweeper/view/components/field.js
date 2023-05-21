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
  disabled: 'minesweeper-field_disabled',
};

let modelApi;
const fieldElement = createElement('div', CLASSES.fieldInit);
const cellById = new Map();
const flaggedCells = new Set();
const modifiedCells = new Set();
const fieldApi = {
  addToModified(id) { modifiedCells.add(id); },
  removeFromModified(id) { modifiedCells.delete(id); },

  addToFlagged(id) {
    flaggedCells.add(id);
    this.addToModified(id);
  },
  removeFromFlagged(id) {
    flaggedCells.delete(id);
    this.removeFromModified(id);
  },
};

export function init(api) {
  modelApi = api;
  cellFactory.init({ modelApi, fieldApi });

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

export function revealCell({ primaryCell, secondaryCells }) {
  reveal(primaryCell);
  secondaryCells.forEach((cellData) => {
    reveal(cellData);
  });
  function reveal({ id, value }) {
    const cell = cellById.get(id);
    cell.setValue(value);
  }
}

export function revealField({ explodedId, minesIds }) {
  const explodedCell = cellById.get(explodedId);
  explodedCell.explodes();

  minesIds.forEach((id) => {
    const remainedMineCell = cellById.get(id);
    remainedMineCell.remainsMined();
  });

  flaggedCells.forEach((id) => {
    if (!minesIds.includes(id)) {
      const falseFlaggedCell = cellById.get(id);
      falseFlaggedCell.isFalseFlagged();
    }
  });

  fieldElement.classList.add(CLASSES.disabled);
}

export function winGame() {
  fieldElement.classList.add(CLASSES.disabled);
}

export function getElement() {
  return fieldElement;
}
