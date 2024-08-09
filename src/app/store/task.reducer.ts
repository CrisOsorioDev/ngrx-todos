import { v4 } from 'uuid';
import { ITask } from '../interfaces/task.interface';
import { createReducer, on } from '@ngrx/store';
import {
  addTask,
  markTaskAsCompleted,
  removeAllTasks,
  removeCompletedTasks,
  removeTask,
  resetAllTasks,
} from './task.actions';

const initialState: ITask[] = [];

export const tasksReducer = createReducer(
  initialState,
  on(addTask, (state, { name }) => [
    ...state,
    { name, isCompleted: false, id: v4() },
  ]),
  on(markTaskAsCompleted, (state, { id }) =>
    state.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }

      return task;
    }),
  ),
  on(removeTask, (state, { id }) => state.filter((task) => task.id !== id)),
  on(removeCompletedTasks, (state) =>
    state.filter((task) => !task.isCompleted),
  ),
  on(resetAllTasks, (state) =>
    state.map((task) => ({ ...task, isCompleted: false })),
  ),
  on(removeAllTasks, (state) => (state = [])),
);
