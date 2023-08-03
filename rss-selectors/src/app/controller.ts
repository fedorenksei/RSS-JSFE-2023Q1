import * as model from './model/model';
import * as view from './view/view';

export function start() {
  model.init();
  view.setLevels(model.getLevels());
  view.setTaskGetter(model.getTask);
  view.init();
  view.setSolutionHandler(model.handleSolution);
}

export function getElement() {
  return view.getElement();
}
