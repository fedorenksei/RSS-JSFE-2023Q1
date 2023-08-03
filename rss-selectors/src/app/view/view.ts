import { Level, SolutionHandler, Task, TaskGetter } from '../types';
import './basic.css';
import createInput from './components/input';
import createFigure from './components/figure';
import createLevels from './components/levels';
import createHtml from './components/html';
import createHint from './components/hint';
import validate from './validation';

const element = document.createElement('div');
element.classList.add('app');

const figure = createFigure();
const input = createInput();
const levels = createLevels();
const html = createHtml();
element.append(...[figure, input, levels, html].map((block) => block.getElement()));

const hint = createHint();
input.addHintButton(hint.getElement());

let currentTask: Task;
let currentTaskNumber: number;

let getTask: TaskGetter;
let handleSolution: SolutionHandler;

input.setSubmissionCallback((selector) => {
  const isDone = validate({ input: selector, task: currentTask });
  if (!isDone) {
    input.showFailure();
    return;
  }
  levels.markLevel({ taskNumber: currentTaskNumber, isHintUsed: hint.isUsed });
  handleSolution({ taskNumber: currentTaskNumber, isHintUsed: hint.isUsed });
  input.clear();
  displayTask();
  hint.isUsed = false;
});

hint.setHandler(() => {
  input.displayHint(currentTask.hint);
});

export function getElement() {
  return element;
}

export function setLevels(levelsData: Level[]) {
  levels.setLevels(levelsData);
}

export function setTaskGetter(callback: TaskGetter) {
  getTask = callback;
}

export function setSolutionHandler(callback: SolutionHandler) {
  handleSolution = callback;
}

export function init() {
  displayTask();
}

function displayTask() {
  ({ task: currentTask, number: currentTaskNumber } = getTask());
  figure.setContentByTask(currentTask);
  html.setContentByTask(currentTask);
}
