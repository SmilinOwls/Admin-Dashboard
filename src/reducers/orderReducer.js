// orderReducer.js

import { GET_ORDER, UPDATE_ORDER, DELETE_ORDER } from '../actions/types';

export default function postReducer(state = [], action) {
  switch (action.type) {
    case GET_ORDER:
      return action.orders;
    case UPDATE_ORDER:
        const data = [...state];
        const idx = data.findIndex(order => order.key === action.order.key);
        if(idx > -1){
            const item = state[idx];
            data.splice(idx, 1, {
                ...action.order,
                ...item
            });
        } else{
            data.push(action.order);
        }
        
      return data;
    case DELETE_ORDER:
      return state.filter(order => order.key !== action.id);
    default:
      return state;
  }
}