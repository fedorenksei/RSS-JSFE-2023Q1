import Game from './game/controller.js';

const defaultGame = new Game(10);

export default function getElement() {
  return defaultGame.getElement();
}
