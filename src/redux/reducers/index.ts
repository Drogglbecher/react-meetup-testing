// Redux
import {combineReducers} from 'redux';

// Reducers
import authenticationReducer from './authenticationReducer';
import {State as AuthenticationState} from './authenticationReducer';

export type State = {
  authentication: AuthenticationState;
};

export const rootReducer = combineReducers({
  authentication: authenticationReducer,
});
