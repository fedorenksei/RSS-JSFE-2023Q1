import createElement from '../../utils/createElement';
import './styles.css';

function createField(size) {
  if (typeof size !== 'number' || Number.isNaN(size)) return '';
  const element = createElement('div', 'minesweeper__field minesweeper-field');
  const cells = [];
  for (let index = 0; index < size * size; index += 1) {
    const cell = createElement('div', 'minesweeper-field__cell');
    cells.push(cell);
  }
  element.append(...cells);
  return element;
}

export default class View {
  constructor(size) {
    this.element = createField(size);
  }

  getElement() {
    return this.element;
  }
}
