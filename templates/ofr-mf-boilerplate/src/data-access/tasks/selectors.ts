import type { ITasksState } from './reducer';

interface TasksState {
  tasks: ITasksState;
}

// общие селекторы
export const getTasksState = (state: TasksState) => state.tasks;

// селекторы всех задач
export const getTasksDataState = (state: TasksState) => getTasksState(state).tasks;
export const getTasksData = (state: TasksState) => getTasksDataState(state).data;
export const isTasksDataLoading = (state: TasksState) => getTasksDataState(state).isLoading;
export const getTasksDataFilter = (state: TasksState) => getTasksDataState(state).filter;
export const getLastErrorOnTasksData = (state: TasksState) => getTasksDataState(state).lastError;

// селекторы текущей задачи
export const getCurrentTaskState = (state: TasksState) => getTasksState(state).currentTask;
export const getCurrentTask = (state: TasksState) => getCurrentTaskState(state).current;
export const isCurrentTaskLoading = (state: TasksState) => getCurrentTaskState(state).isLoading;
export const getLastErrorOnCurrentTask = (state: TasksState) => getCurrentTaskState(state).lastError;
