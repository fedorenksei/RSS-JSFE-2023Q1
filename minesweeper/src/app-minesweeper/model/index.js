import * as gameFactory from './game/gameFactory.js';

// let viewApi;
export function init(api) {
  // viewApi = api;
  gameFactory.init(api);
}

const modelApi = {
  isGameNow: false,
  startGame,
};
export function getApi() {
  return modelApi;
}

// todo: look into LS and retreat a game if there's one

function startGame(params) {
  const game = gameFactory.create(params);
  modelApi.isGameNow = true;
  Object.assign(modelApi, game);
}
