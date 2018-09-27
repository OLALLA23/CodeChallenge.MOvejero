import { Store, createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { state, StateReducer } from './reducers';
import logger from 'redux-logger';


const middlewares = [
    reduxThunk,
    logger
];

export const store: Store<StateReducer> = createStore(
    state,
    applyMiddleware(...middlewares)
);

