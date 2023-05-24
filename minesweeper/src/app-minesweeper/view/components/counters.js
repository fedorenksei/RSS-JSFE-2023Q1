import * as countersView from './countersView';

let modelApi;
export function init(api) {
  modelApi = api;
  if (modelApi) {
    setCounters();
  }
}

let seconds;
let steps;
let flags;
let mines;
export function setCounters() {
  if (!modelApi) throw new Error('Counters are not initialized');
  if (!modelApi.isGameNow) return;

  ({
    seconds,
    steps,
    flags,
    mines,
  } = modelApi.getDataForView());
  launchSecondsCounter();
}

let secondIntervalId;
function launchSecondsCounter() {
  if (typeof seconds !== 'number') throw new Error('seconds are not initialized');
  secondIntervalId = setInterval(() => {
    seconds += 1;
    console.log(seconds);
  }, 1000);
}

export function stopSecondCounter() {
  if (!secondIntervalId) return;
  clearInterval(secondIntervalId);
}

export function countFlag() {
  flags += 1;
}

export function getElement() {
  return countersView.getElement();
}
