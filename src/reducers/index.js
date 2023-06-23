// index.js

import { combineReducers } from 'redux';
import OrderReducer from './OrderReducer';
import BlogReducer from './BlogReducer';

export default combineReducers({
    orders: OrderReducer,
    blogs: BlogReducer,
});