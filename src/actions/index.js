import { GET_ORDER, UPDATE_ORDER, DELETE_ORDER } from './types';

export const getOrder = (orders) => ({
  type: GET_ORDER,
  orders: orders
});

export const updateOrder = (order) => ({
  type: UPDATE_ORDER,
  order: order
});

export const deleteOrder = key => ({
  type: DELETE_ORDER,
  orderID: {
    key
  }
});