import * as fieldView from './fieldView';
import * as cellFactory from './cell/cell';
import * as newGame from '../newGame';
import * as counters from '../counters/counters';

let modelApi;
let cellById;
export function init(api) {
  modelApi = api;
  cellFactory.init({ modelApi, fieldApi });

  fieldView.init(modelApi);
  cellById = fieldView.getCellsMap();

  if (!modelApi.currentGame) {
    fieldView.setSize('small');
  }
}

const flaggedCells = new Set();
const modifiedCells = new Set();
const fieldApi = {
  addToFlagged(id) {
    flaggedCells.add(id);
    modifiedCells.add(id);
    counters.plusFlag();
  },
  removeFromFlagged(id) {
    flaggedCells.delete(id);
    modifiedCells.delete(id);
    counters.minusFlag();
  },
  startGame() { newGame.startGame(); },
};

export function revealCell({ primaryCell, secondaryCells }) {
  reveal(primaryCell);
  secondaryCells.forEach((cellData) => {
    reveal(cellData);
  });
  counters.countStep();
  function reveal({ id, value }) {
    const cell = cellById.get(id);
    cell.setValue(value);
    modifiedCells.add(id);
  }
}

export function revealField({ explodedId, minesIds }) {
  const explodedCell = cellById.get(explodedId);
  explodedCell.explodes();

  minesIds.forEach((id) => {
    const remainedMineCell = cellById.get(id);
    remainedMineCell.remainsMined();
    modifiedCells.add(id);
  });

  flaggedCells.forEach((id) => {
    if (!minesIds.includes(id)) {
      const falseFlaggedCell = cellById.get(id);
      falseFlaggedCell.isFalseFlagged();
    }
  });

  fieldView.disableField();
}

export function winGame() {
  fieldView.disableField();
}

export function reset() {
  cellById.forEach((cell) => { cell.reset(); });
}

export function getElement() {
  return fieldView.getElement();
}
