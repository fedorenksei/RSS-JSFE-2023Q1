import './cell.css';
import createElement from '../createElement';
import * as newGame from './newGame';
// import flagIcon from '../assets/flag.svg';

const CLASSES = {
  init: 'minesweeper-field__cell cell',
  revealed: 'cell_revealed',
  numericTemplate: 'cell_value_',
  flagged: 'cell_value_flag',
  mine: 'cell_value_mine',
};

let modelApi;
export function init(api) {
  modelApi = api;
}

export function create(id) {
  let flagged;
  let revealed;

  const element = createCellElement();
  element.addEventListener('click', () => {
    if (flagged) return;
    clickHandler(id);
  });

  element.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    if (revealed) return;
    if (!flagged) {
      flagged = true;
      element.classList.add(CLASSES.flagged);
    } else {
      flagged = false;
      element.classList.remove(CLASSES.flagged);
    }
    // flag(element);
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
    newGame.startGame(id);
  }
  modelApi.openCell(id);
}

function createCellElement() {
  return createElement('div', CLASSES.init);
}
