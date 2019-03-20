import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {rootReducer} from './reducers';
import {initialState as initialAuthenticationState} from './reducers/authenticationReducer';

/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/indent */
const composeEnhancers =
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        serialize: true,
      })
    : compose;

const initialState = {
  authentication: initialAuthenticationState,
};

export const composeStore = () =>
  createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunkMiddleware)),
  );
