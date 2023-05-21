import * as view from './view/index.js';
import * as model from './model/index.js';

// Model looks in LocalStorage for a saved game and inject view API for its submodule
model.init(view.getApi());

// A saved game is available through ModelAPI,
// so the View will be initialized with this game if it is present.
view.init(model.getApi());

export default function getAppElement() {
  return view.getElement();
}
