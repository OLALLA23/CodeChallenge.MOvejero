import { combineReducers } from 'redux';
import PhoneModel from '../models/PhoneModel';
import { phoneReducer } from './phoneReducer';
import { httpReducer } from './httpReducer';

export interface StateReducer {
    phones: PhoneModel[], 
    httpLoading: boolean,    
}

export const state = combineReducers<StateReducer>({
    phones: phoneReducer,    
    httpLoading: httpReducer,    
});
