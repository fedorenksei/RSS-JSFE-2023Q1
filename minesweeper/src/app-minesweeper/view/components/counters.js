import './counters.css';
import * as countersView from './countersView';

let modelApi;
export function init(api) {
  modelApi = api;
  reset();
}

const counterValues = {
  seconds: 0,
  steps: 0,
  flags: 0,
  mines: 0,
};
let secondIntervalId;

reset();

export function reset() {
  if (modelApi && modelApi.isGameNow) {
    modelApi.getDataForView();
    ({
      seconds: counterValues.seconds,
      steps: counterValues.steps,
      flags: counterValues.flags,
      mines: counterValues.mines,
    } = modelApi.getDataForView());
  }

  countersView.setValues(counterValues);

  if (modelApi && modelApi.isGameNow) {
    continueSecondsCounter();
  }
}

export function continueSecondsCounter() {
  secondIntervalId = setInterval(() => {
    counterValues.seconds += 1;
    countersView.count('seconds');
  }, 1000);
}

export function stopSecondCounter() {
  if (!secondIntervalId) return;
  clearInterval(secondIntervalId);
}

export function countFlag() {
  counterValues.flags += 1;
}

export function getElement() {
  return countersView.getElement();
}
