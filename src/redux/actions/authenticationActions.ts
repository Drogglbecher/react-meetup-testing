export const SubmitCredentialsStart = '[AUTHENTICATION] SubmitCredentialsStart';
export const SubmitCredentialsSuccess =
  '[AUTHENTICATION] SubmitCredentialsSuccess';
export const Failed = '[AUTHENTICATION] Failed';
export const Logout = '[AUTHENTICATION] Logout';

export type SubmitCredentialsStartAction = {
  type: string;
};

type SubmitCredentialsSuccessAction = {
  type: string;
  payload: string;
};

type FailedAction = {
  type: string;
  payload: string;
};

export type LogoutAction = {
  type: string;
  payload: string;
};

export const submitCredentialsStart = (): SubmitCredentialsStartAction => {
  return {type: SubmitCredentialsStart};
};

export const submitCredentialsSuccess = (
  username: string,
): SubmitCredentialsSuccessAction => {
  return {type: SubmitCredentialsSuccess, payload: username};
};

export const failed = (error: string): FailedAction => {
  return {type: Failed, payload: error};
};

export const logout = (): LogoutAction => {
  return {type: Logout, payload: ''};
};

export type Action =
  | LogoutAction
  | SubmitCredentialsSuccessAction
  | FailedAction;
