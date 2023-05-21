import './styles.css';
import * as field from './components/field';
import * as cell from './components/cell';
import * as gameState from './components/newGame';

export function init(model) {
  field.init(model);
  cell.init(model);
  gameState.init(model);
  // todo: inject model into other view submodules
}

export function getElement() {
  // todo: add all elements
  return field.getElement();
}

export function getApi() {
  return {
    revealCell: field.revealCell,
    revealField: field.revealField,
  };
}
