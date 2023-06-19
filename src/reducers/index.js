// index.js

import { combineReducers } from 'redux';
import OrderReducer from './OrderReducer';

export default combineReducers({
    orders: OrderReducer
});