import './cell.css';
import createElement from '../createElement';
import * as newGame from './newGame';
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
  modelApi = apis.modelApi;
  fieldApi = apis.fieldApi;
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

    fieldApi.flagCell(id);
  });

  return {
    setValue(value) {
      revealed = true;
      element.classList.add(CLASSES.revealed);
      fieldApi.modifyCell(id);

      if (typeof value === 'number' && value > 0 && value < 9) {
        element.classList.add(CLASSES.numericTemplate + value);
      }

      if (value === 'mine') {
        element.classList.add(CLASSES.mine);
      }
    },

    explodes() {
      element.classList.add(CLASSES.explodes);
      fieldApi.modifyCell(id);
    },

    remainsMined() {
      if (!flagged) {
        element.classList.add(CLASSES.mined);
      }
      fieldApi.modifyCell(id);
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
    newGame.startGame(id);
  }
  modelApi.openCell(id);
}

function createCellElement() {
  return createElement('div', CLASSES.init);
}
