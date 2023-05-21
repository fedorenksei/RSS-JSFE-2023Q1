import getCoordinatesAround from './utils.js';

export default function create(size) {
  const cellById = new Map();
  // const cellByCoordinates = new Map();
  const matrix = [];

  let currentId = 0;
  for (let x = 0; x < size; x += 1) {
    const row = [];
    matrix.push(row);
    for (let y = 0; y < size; y += 1) {
      const cell = createCell(currentId, { x, y });
      cellById.set(currentId, cell);
      row.push(cell);
      // cellByCoordinates.set([x, y].join('-'), cell);
      currentId += 1;
    }
  }

  return {
    // cellByCoordinates,
    // getSize: () => size,
    data: {
      cellById,
      matrix,
      // cellByCoordinates,
    },
    getByXY({ x, y }) {
      return matrix?.[x]?.[y];
    },
    getById(id) { return cellById.get(id); },
    // getByCoordinates(coord) {cellByCoordinates.get(coord.join('-'))},
    placeMines,
  };
}

function placeMines({ exceptCellId, howMuchMines }) {
  const allIds = Array.from(this.data.cellById.keys());
  function remove(id) {
    allIds.splice(allIds.indexOf(id), 1);
  }
  remove(exceptCellId);

  let minesCount = 0;
  while (minesCount < howMuchMines) {
    const randomId = allIds[Math.floor(Math.random() * allIds.length)];
    const cell = this.data.cellById.get(randomId);
    cell.mine();
    incrementAround.call(this, cell.getCoordinates());
    remove(randomId);
    minesCount += 1;
  }

  function incrementAround({ x, y }) {
    const cellsAround = getCoordinatesAround({ x, y });
    cellsAround.forEach(({ x: cellX, y: cellY }) => {
      const targetCell = this.getByXY({ x: cellX, y: cellY });
      if (!targetCell) return;
      targetCell.setNumber(targetCell.getNumber() + 1);
    });
  }
}

function createCell(id, { ...coord }) {
  // coord = {...coord}
  return {
    state: {
      mined: false,
      number: 0,
      revealed: false,
      flagged: false,
    },

    getId: () => id,
    getCoordinates: () => coord,

    mine() { this.state.mined = true; },
    isMined() { return !!this.state.mined; },

    flag() { this.state.flagged = true; },
    isFlagged() { return !!this.state.flagged; },

    setNumber(num) { this.state.number = num; },
    getNumber() { return this.state.number; },
  };
}
