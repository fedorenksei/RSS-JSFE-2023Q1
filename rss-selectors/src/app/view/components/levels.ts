import { Level, SolutionInfo } from '../../types';

class LevelObject {
  number: number;
  element: HTMLDivElement;
  constructor(data: Level) {
    this.number = data.number;
    this.element = document.createElement('div');
    this.element.innerText = `Level ${this.number}`;
  }

  getElement() {
    return this.element;
  }

  markDone() {
    this.element.classList.add('level_done');
  }

  markDoneWithHint() {
    this.element.classList.add('level_done-with-hint');
  }
}

class Levels {
  element: HTMLDivElement;
  levels?: LevelObject[];
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('levels');
  }

  getElement() {
    return this.element;
  }

  setLevels(data: Level[]) {
    this.levels = data.map((levelData) => new LevelObject(levelData));
    this.element.replaceChildren(...this.levels.map((level) => level.getElement()));
  }

  markLevel({ taskNumber, isHintUsed }: SolutionInfo) {
    if (!this.levels) return;
    const level = this.levels[taskNumber - 1];
    if (isHintUsed) level.markDoneWithHint();
    else level.markDone();
  }
}

export default function create() {
  return new Levels();
}
