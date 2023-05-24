import getCoordinatesAround from './utils';
import createMatrix from './matrixFactory';

let viewApi;
export function init(api) {
  viewApi = api;
}

export function create({ size, mines }) {
  const matrix = createMatrix(size);

  let areMinesPlaced = false;
  let minesIds;

  let revealedCellsCounter = 0;
  const cellsToRevealForWin = size ** 2 - mines;

  let seconds = 0;
  let steps = 0;
  let flags = 0; // todo: it's redundant variable, can be calculated on view side

  const gameObject = {
    openCell,
    getMinesAmount() { return mines; },
    countSecond() { seconds += 1; },
    countStep() { steps += 1; },
    getDataForView() {
      return {
        mines,
        seconds,
        steps,
        flags,
        getRevealedCells() { matrix.getRevealedCells(); },
        getFlaggedCells() { matrix.getFlaggedCells(matrix); },
      };
    },
    flagCell(id) {
      const cell = matrix.getById(id);
      cell.flag();
      flags += 1;
    },
    unflagCell(id) {
      const cell = matrix.getById(id);
      cell.unflag();
      flags -= 1;
    },
  };

  return gameObject;

  function openCell(id) {
    if (!areMinesPlaced) {
      minesIds = matrix.placeMines({ exceptCellId: id, howMuchMines: mines });
      areMinesPlaced = true;
    }

    const cell = matrix.getById(id);

    if (cell.isMined()) {
      viewApi.revealField({ explodedId: id, minesIds });
      return;
    }

    const value = cell.getNumber();
    cell.reveal();
    steps += 1;

    let secondaryCells = [];
    if (value === 0) {
      secondaryCells = getCellsAround({ matrix, coordinates: cell.getCoordinates() });
    }

    viewApi.revealCell({
      primaryCell: { id, value },
      secondaryCells,
    });

    setTimeout(() => {
      revealedCellsCounter += secondaryCells.length + 1;
      if (revealedCellsCounter === cellsToRevealForWin) {
        viewApi.winGame();
      }
    });
  }
}

function getCellsAround({ matrix, coordinates }) {
  const result = [];

  const checkedIds = new Set();
  checkCell(coordinates);

  function checkCell({ x, y }) {
    const coordinatesAround = getCoordinatesAround({ x, y });
    coordinatesAround.forEach(({ x: cellX, y: cellY }) => {
      const cell = matrix.getByXY({ x: cellX, y: cellY });
      if (!cell || cell.isRevealed() || cell.isFlagged()) return;
      const id = cell.getId();
      if (checkedIds.has(id)) return;
      const value = cell.getNumber();
      cell.reveal();
      result.push({ id, value });
      checkedIds.add(id);

      if (value === 0) {
        checkCell({ x: cellX, y: cellY });
      }
    });
  }

  return result;
}
