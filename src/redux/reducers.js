import {combineReducers } from 'redux'
import BoilerServiceReducer from './boiler/reducers/index';

export default combineReducers({
    boiler: BoilerServiceReducer
});