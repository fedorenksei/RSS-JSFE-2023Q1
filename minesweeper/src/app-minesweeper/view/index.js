import './styles.css';
import createElement from './createElement';
import * as field from './components/field';
import * as gameState from './components/newGame';

export function init(model) {
  field.init(model);
  gameState.init(model);
  // todo: inject model into other view submodules
}

export function getElement() {
  const appElement = createElement('div', 'minesweeper-app');
  appElement.append(field.getElement());
  // todo: add all elements
  return appElement;
}

export function getApi() {
  return {
    revealCell: field.revealCell,
    revealField: field.revealField,
  };
}
