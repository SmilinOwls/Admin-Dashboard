import { GET_ORDER, UPDATE_ORDER, DELETE_ORDER } from './types';
import dayjs from 'dayjs';
import {dateFormat} from '../utils/config';

const dataSource = [{
  key: 1,
  place: `Place I`,
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
  place: `Place II`,
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
  place: `Place III`,
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

export const getOrder = () => {
  const orders = dataSource;
  return ({
  type: GET_ORDER,
  orders: orders
  });
};

export const updateOrder = (order) => {

  return ({
  type: UPDATE_ORDER,
  order: order
  });
};

export const deleteOrder = id => {
  
  return ({
    type: DELETE_ORDER,
    id
  });
};