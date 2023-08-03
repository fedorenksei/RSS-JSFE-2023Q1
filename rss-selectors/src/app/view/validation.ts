import { Task } from '../types';

export default function validate({ task, input }: { task: Task; input: string }) {
  return input == task.hint;
}
