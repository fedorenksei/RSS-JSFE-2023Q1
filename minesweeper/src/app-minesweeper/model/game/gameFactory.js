import createMatrix from './matrixFactory';

let viewApi;
export function init(api) {
  viewApi = api;
}

export function create({ size, mines }) {
  const matrix = createMatrix(size);
  let areMinesPlaced = false;

  return {
    openCell(id) {
      if (!areMinesPlaced) {
        matrix.placeMines({ exceptCellId: id, howMuchMines: mines });
        areMinesPlaced = true;
      }

      const cell = matrix.getById(id);

      if (cell.isMined()) {
        viewApi.revealField(); // todo
        return;
      }

      const value = cell.getNumber();
      viewApi.revealCell({
        primaryCell: { id, value },
        secondaryCells: [], // todo
      });
    },
  };
}
