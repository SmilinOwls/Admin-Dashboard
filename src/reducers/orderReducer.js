// orderReducer.js

import { GET_ORDER, UPDATE_ORDER, DELETE_ORDER } from '../actions/types';

export default function postReducer(state = [], action) {
  switch (action.type) {
    case GET_ORDER:
      return state.length !== 0 ?  state : action.orders;
    case UPDATE_ORDER:
        const data = [...state];
        const idx = data.findIndex(order => order.key === action.order.key);
        if(idx > -1){
            data.splice(idx, 1, {
                ...action.order,
            });
        } else{
            data.push(action.order);
        }
        console.log("Data",data);
        
      return data;
    case DELETE_ORDER:
      return state.filter(order => order.key !== action.id);
    default:
      return state;
  }
}