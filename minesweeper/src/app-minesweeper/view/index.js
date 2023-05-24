import './styles.css';
import createElement from './createElement';
import * as field from './components/field/field';
import * as newGame from './components/newGame';
import * as counters from './components/counters/counters';
import * as message from './components/message/message.js';

export function init(modelApi) {
  field.init(modelApi);
  newGame.init(modelApi);
  counters.init(modelApi);
  message.init(modelApi);
  // todo: inject model into other view submodules
}

export function getElement() {
  const appElement = createElement('div', 'minesweeper-app');
  appElement.replaceChildren(
    counters.getElement(),
    field.getElement(),
  );
  // todo: add all elements
  return appElement;
}

export function getApi() {
  return {
    revealCell(data) { field.revealCell(data); },
    revealField(data) {
      field.revealField(data);
      counters.stopSecondCounter();
      message.loose();
    },
    winGame() {
      field.winGame();
      counters.stopSecondCounter();
      message.win();
    },
  };
}
