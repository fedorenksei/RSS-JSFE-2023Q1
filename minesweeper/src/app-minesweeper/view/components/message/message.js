import './message.css';
import createElement from '../../createElement';

let modelApi;
export function init(api) {
  modelApi = api;
}

const CLASSES = {
  message: 'message',
  text: 'message__text',
  background: 'message__background',
};

const background = createElement('div', CLASSES.background);
const element = createElement('div', CLASSES.message);
const message = createElement('p', CLASSES.text);
background.append(element);
element.append(message);

export function win() {
  const { seconds, steps } = modelApi.getDataForView();
  message.textContent = `Hooray! You found all mines in ${seconds} seconds and ${steps} moves!`;
  display();
}

export function loose() {
  message.textContent = 'Game over. Try again';
  display();
}

function display() {
  document.body.append(background);
  setTimeout(() => {
    document.addEventListener('click', () => { close(); }, { once: true });
  });
}

function close() {
  background.remove();
}
