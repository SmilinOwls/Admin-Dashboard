// orderReducer.js

import { GET_ORDER, UPDATE_ORDER, DELETE_ORDER } from '../actions/types';
import dayjs from 'dayjs';

const dateFormat = "MM/DD/YYYY HH:mm";
const dataSource = [{
  key: 1,
  payment: `Name I`,
  user: 'User ID',
  userInfo: {
      fullName: "FullName I",
      phone: "0987773321",
      IdentifyCard: "1234567890"
  },
  cart: [{
      title: "Title I",
      image: "",
      price: 1,
      numOfDays: 7,
      maxGuests: 2,
      qnt: 1,
      room: "Room ID",
      key: 1,
  }],
  checkIn: dayjs('07/12/2023 12:00', dateFormat),
  checkOut: dayjs('08/12/2023 12:00', dateFormat),
  paymentMethod: "Paypal",
  numOfGuest: 1,
  orderStatus: "Processing",
  taxPrice: 0,
  totalPrice: 10,
  paidAt: dayjs('06/12/2023 12:00', dateFormat),
},
{
  key: 2,
  payment: `Name II`,
  user: 'User ID',
  userInfo: {
      fullName: "FullName II",
      phone: "0987773321",
      IdentifyCard: "1234567890"
  },
  cart: [{
      title: "Title II",
      image: "",
      price: 1,
      numOfDays: 7,
      maxGuests: 2,
      qnt: 1,
      room: "Room ID",
      key: 1,
  }],
  checkIn: dayjs('07/12/2023 12:00', dateFormat),
  checkOut: dayjs('08/12/2023 12:00', dateFormat),
  paymentMethod: "Paypal",
  numOfGuest: 1,
  orderStatus: "Processing",
  taxPrice: 0,
  totalPrice: 10,
  paidAt: dayjs('06/12/2023 12:00', dateFormat),
},
{
  key: 3,
  payment: `Name III`,
  user: 'User ID',
  userInfo: {
      fullName: "FullName III",
      phone: "0987773321",
      IdentifyCard: "1234567890"
  },
  cart: [{
      title: "Title III",
      image: "",
      price: 1,
      numOfDays: 7,
      maxGuests: 2,
      qnt: 1,
      room: "Room ID",
      key: 1,
  }],
  checkIn: dayjs('07/12/2023 12:00', dateFormat),
  checkOut: dayjs('08/12/2023 12:00', dateFormat),
  paymentMethod: "Paypal",
  numOfGuest: 1,
  orderStatus: "Approval",
  taxPrice: 0,
  totalPrice: 10,
  paidAt: dayjs('06/12/2023 12:00', dateFormat),
},
];


export default function postReducer(state = dataSource, action) {
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