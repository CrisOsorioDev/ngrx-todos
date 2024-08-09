import { ActionReducerMap } from '@ngrx/store';
import { ITask } from '../interfaces/task.interface';
import { tasksReducer } from './task.reducer';

export interface AppState {
  tasks: ITask[];
}

export const appReducers: ActionReducerMap<AppState> = {
  tasks: tasksReducer,
};
