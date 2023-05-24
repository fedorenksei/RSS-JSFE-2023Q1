import './theme.css';
import createElement from '../app-minesweeper/view/createElement';

const element = createElement('div', 'theme-switcher');
document.body.append(element);
element.addEventListener('click', () => {
  document.body.classList.toggle('body__night-mode');
});
