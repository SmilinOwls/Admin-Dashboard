// index.js

import { combineReducers } from 'redux';
import OrderReducer from './OrderReducer';
import BlogReducer from './BlogReducer';
import RoomReducer from './RoomReducer';

export default combineReducers({
    orders: OrderReducer,
    blogs: BlogReducer,
    rooms: RoomReducer
});