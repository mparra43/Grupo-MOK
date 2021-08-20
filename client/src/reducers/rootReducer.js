import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { authReducer } from './authReducer';
import {filmsReducer} from "./filmsReducer";



export const rootReducer = combineReducers({
    films:filmsReducer,
    ui: uiReducer,
    auth: authReducer
})

