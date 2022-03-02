import type { IApplicationsState } from './reducer';

interface ApplicationsState {
  applications: IApplicationsState;
}

// общие селекторы
export const getApplicationsState = (state: ApplicationsState) => state.applications;

// селекторы текущей заявки
export const getCurrentApplicationState = (state: ApplicationsState) =>
  getApplicationsState(state).currentApplication;
export const isCurrentApplicationLoading = (state: ApplicationsState) =>
  getCurrentApplicationState(state).isLoading;
export const getCurrentApplication = (state: ApplicationsState) =>
  getCurrentApplicationState(state).current;
export const getLastErrorOnCurrentApplication = (state: ApplicationsState) =>
  getCurrentApplicationState(state).lastError;

// селекторы всех заявок
export const getAllApplicationsState = (state: ApplicationsState) =>
  getApplicationsState(state).applications;
export const isApplicationsLoading = (state: ApplicationsState) =>
  getAllApplicationsState(state).isLoading;
export const getApplicationsData = (state: ApplicationsState) =>
  getAllApplicationsState(state).data;
export const getLastErrorOnApplications = (state: ApplicationsState) =>
  getAllApplicationsState(state).lastError;
