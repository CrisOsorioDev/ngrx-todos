import { createAction, props } from '@ngrx/store';

export const addTask = createAction(
  '[TASK] addTask',
  props<{ name: string }>(),
);
export const markTaskAsCompleted = createAction(
  '[TASK] markTaskAsCompleted',
  props<{ id: string }>(),
);
export const removeTask = createAction(
  '[TASK] removeTask',
  props<{ id: string }>(),
);
export const removeCompletedTasks = createAction('[TASK] removeCompletedTasks');
export const resetAllTasks = createAction('[TASK] resetAllTasks');
export const removeAllTasks = createAction('[TASK] removeAllTasks');
