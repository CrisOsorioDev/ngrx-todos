import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITask } from '../interfaces/task.interface';

const selectTasksFeature = createFeatureSelector<ITask[]>('tasks');

export const selectTaks = createSelector(
  selectTasksFeature,
  (state: ITask[]) => state,
);
