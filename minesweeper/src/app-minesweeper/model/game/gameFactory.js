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

  return {
    openCell(id) {
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

      let secondaryCells = [];
      if (value === 0) {
        secondaryCells = getCellsAround({ matrix, coordinates: cell.getCoordinates() });
      }

      viewApi.revealCell({
        primaryCell: { id, value },
        secondaryCells,
      });
    },
  };
}

function getCellsAround({ matrix, coordinates }) {
  const result = [];

  const checkedIds = new Set();
  checkCell(coordinates);

  function checkCell({ x, y }) {
    const coordinatesAround = getCoordinatesAround({ x, y });
    coordinatesAround.forEach(({ x: cellX, y: cellY }) => {
      const cell = matrix.getByXY({ x: cellX, y: cellY });
      if (!cell) return;
      const id = cell.getId();
      if (checkedIds.has(id)) return;
      const value = cell.getNumber();
      result.push({ id, value });
      checkedIds.add(id);

      if (value === 0) {
        checkCell({ x: cellX, y: cellY });
      }
    });
  }

  return result;
}
