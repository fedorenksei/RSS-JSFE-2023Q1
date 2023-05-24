import './cell.css';
import createElement from '../createElement';
// import flagIcon from '../assets/flag.svg';

const CLASSES = {
  init: 'minesweeper-field__cell cell',
  revealed: 'cell_revealed',
  numericTemplate: 'cell_value_',
  flagged: 'cell_value_flag',
  mined: 'cell_value_mined',
  explodes: 'cell_value_explodes',
  falseFlag: 'cell_value_false-flag',
};

let modelApi;
let fieldApi;
export function init(apis) {
  ({ modelApi, fieldApi } = apis);
}

export function create(id) {
  let flagged;
  let revealed;

  const element = createCellElement();
  element.addEventListener('click', () => {
    if (flagged || revealed) return;
    clickHandler(id);
  });

  element.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    if (revealed || !modelApi.flagCell) return;

    if (!flagged) {
      flagged = true;
      element.replaceChildren(createFlag());
      modelApi.flagCell(id);
      fieldApi.addToFlagged(id);
    } else {
      flagged = false;
      element.replaceChildren();
      modelApi.unflagCell(id);
      fieldApi.removeFromFlagged(id);
    }
  });

  return {
    setValue(value) {
      revealed = true;
      element.classList.add(CLASSES.revealed);

      if (typeof value === 'number' && value > 0 && value < 9) {
        element.classList.add(CLASSES.numericTemplate + value);
      }

      if (value === 'mine') {
        element.classList.add(CLASSES.mine);
      }
    },

    explodes() {
      element.classList.add(CLASSES.explodes);
    },

    remainsMined() {
      if (!flagged) {
        element.append(createMine());
      }
    },

    isFalseFlagged() {
      element.classList.add(CLASSES.falseFlag);
    },

    getElement: () => element,
  };
}

// function flag(elem) {
//   // webpack error
//   const flagIconElement = new Image();
//   flagIconElement.src = flagIcon;
//   elem.append(flagIconElement);
// }

function clickHandler(id) {
  if (!modelApi.isGameNow) {
    fieldApi.startGame(id);
  }
  modelApi.openCell(id);
}

function createCellElement() {
  return createElement('div', CLASSES.init);
}

let flagCanvas;
function createFlag() {
  if (flagCanvas) {
    return cloneCanvas(flagCanvas);
  }

  const canvas = document.createElement('canvas');
  canvas.width = 20;
  canvas.height = 20;

  const context = canvas.getContext('2d');

  // flagpole
  context.fillStyle = 'black';
  context.fillRect(2, 0, 2, 20);
  context.fillRect(0, 18, 6, 2);

  // flag
  context.beginPath();
  context.moveTo(4, 0);
  context.lineTo(20, 7);
  context.lineTo(4, 14);
  context.closePath();
  context.fillStyle = 'red';
  context.fill();

  flagCanvas = canvas;
  return flagCanvas;
}

let mineCanvas;
function createMine() {
  if (mineCanvas) {
    return cloneCanvas(mineCanvas);
  }

  const canvas = document.createElement('canvas');
  canvas.width = 20;
  canvas.height = 20;
  const context = canvas.getContext('2d');

  // mine
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 8;

  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  context.fillStyle = 'black';
  context.fill();

  // flash
  context.beginPath();
  context.moveTo(12, 13); // out
  context.lineTo(15, 8); // in
  context.lineTo(10, 5); // out
  context.lineTo(15, 3); // in
  context.lineTo(12, 0); // out
  context.lineTo(18, 2); // in
  context.lineTo(20, 3); // out
  context.lineTo(17, 7); // in
  context.lineTo(20, 10); // out
  context.closePath();
  context.fillStyle = 'yellow';
  context.fill();

  mineCanvas = canvas;
  return mineCanvas;
}

function cloneCanvas(oldCanvas) {
  const newCanvas = document.createElement('canvas');
  const context = newCanvas.getContext('2d');
  newCanvas.width = oldCanvas.width;
  newCanvas.height = oldCanvas.height;
  context.drawImage(oldCanvas, 0, 0);
  return newCanvas;
}
