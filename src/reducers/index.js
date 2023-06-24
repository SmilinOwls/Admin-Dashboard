// index.js

import { combineReducers } from 'redux';
import OrderReducer from './OrderReducer';
import BlogReducer from './BlogReducer';
import RoomReducer from './RoomReducer';
import PlaceReducer from './PlaceReducer';
import UserReducer from './UserReducer';

export default combineReducers({
    orders: OrderReducer,
    blogs: BlogReducer,
    rooms: RoomReducer,
    places: PlaceReducer,
    users: UserReducer
});