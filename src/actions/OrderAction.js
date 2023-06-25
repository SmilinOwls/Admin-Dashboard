import { GET_ORDER, UPDATE_ORDER, DELETE_ORDER } from './types';


const dataSource = [{
  _id: '1',
  place: `Place ID`,
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
    _id: '1',
  }],
  checkIn: '07/12/2023 12:00',
  checkOut: '08/12/2023 12:00',
  paymentMethod: "Paypal",
  numOfGuest: 1,
  orderStatus: "Processing",
  taxPrice: 0,
  totalPrice: 10,
  paidAt: '04/12/2023 12:00',
},
{
  _id: '2',
  place: `Place ID`,
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
    _id: '1',
  }],
  checkIn: '07/12/2023 12:00',
  checkOut: '08/12/2023 12:00',
  paymentMethod: "Paypal",
  numOfGuest: 1,
  orderStatus: "Processing",
  taxPrice: 0,
  totalPrice: 80,
  paidAt: '05/12/2023 12:00',
},
{
  _id: '3',
  place: `Place ID`,
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
    _id: '1',
  },
  ],
  checkIn: '07/12/2023 12:00',
  checkOut: '08/12/2023 12:00',
  paymentMethod: "Paypal",
  numOfGuest: 1,
  orderStatus: "Approval",
  taxPrice: 0,
  totalPrice: 52,
  paidAt: '06/12/2023 12:00'
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

export const deleteOrder = _id => {

  return ({
    type: DELETE_ORDER,
    _id
  });
};