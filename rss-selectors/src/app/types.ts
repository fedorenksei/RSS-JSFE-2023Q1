export type Level = {
  number: number;
  state: 'done' | 'todo' | 'hint';
}

export type SolutionInfo = {
  taskNumber: number;
  isHintUsed: boolean;
}

export type SolutionHandler = (data: SolutionInfo) => void

export type TaskGetter = () => {
  task: Task;
  number: number;
}

export type Task = {
  hint: string;
  structure: TaskElement[];
}

type TaskElement = {
  type: 'circle' | 'square';
  size: 'small' | 'big';
  color: 'red' | 'green' | 'blue';
  select?: true;
  children?: TaskElement[];
}
