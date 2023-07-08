import { Level, SolutionInfo } from '../types';
import tasks from './tasks';
import * as history from './history';

let currentLevel: number;
let levels: Level[];
resetProgress()

export function init() {
  const progress = history.getProgress()
  if (progress) {
    ({ currentLevel, levels } = progress);
  }
}

export function resetProgress() {
  currentLevel = 1;
  levels = tasks.map((_, i) => ({number: i + 1, state: 'todo'}))
}

export function getLevels(): Level[] {
  return levels;
}

export function getTask() {
  return {
    task: tasks[currentLevel - 1],
    number: currentLevel,
  }
}

export function handleSolution({taskNumber, isHintUsed}: SolutionInfo) {
  levels[taskNumber - 1].state = isHintUsed ? 'hint' : 'done';
  currentLevel += 1;
}
