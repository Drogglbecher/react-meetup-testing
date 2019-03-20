// Actions
import {
  Action,
  Failed,
  Logout,
  SubmitCredentialsSuccess,
} from '../actions/authenticationActions';

export type State = {
  authenticated: boolean;
  username: string;
  error: string;
};

export const initialState = {
  authenticated: false,
  username: '',
  error: '',
};

export default function(state: State = initialState, action: Action) {
  switch (action.type) {
    case SubmitCredentialsSuccess: {
      return {
        authenticated: true,
        error: '',
        username: action.payload,
      };
    }

    case Logout: {
      return {
        authenticated: false,
        error: '',
        username: '',
      };
    }

    case Failed: {
      return {
        authenticated: false,
        error: action.payload,
        username: '',
      };
    }

    default:
      return state;
  }
}
