import { GET_ROOM, ADD_ROOM, UPDATE_ROOM, DELETE_ROOM } from './types';

const dataSource = [{
    _id: 1,
    owner: 'User ID',
    place: 'Place ID',
    title: 'Title I',
    description: 'Description I',
    photos: ['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    ],
    perks: ['perk I', 'perk II'],
    typeRoom: 'Type I',
    coupon: 1,
    numOfBed: 2,
    checkIn: '06/12/2023 12:00',
    checkOut: '07/12/2023 8:00',
    price: 1,
    ratings: 1,
    maxGuests: 1,
    countInStock: 1,
}, {
    _id: 2,
    owner: 'User ID',
    place: 'Place ID',
    title: 'Title II',
    description: 'Description II',
    photos: ['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'],
    perks: ['perk I', 'perk II'],
    typeRoom: 'Type I',
    coupon: 1,
    numOfBed: 2,
    checkIn: '06/12/2023 12:00',
    checkOut: '07/12/2023 8:00',
    price: 1,
    ratings: 1,
    maxGuests: 1,
    countInStock: 1,
}, {
    _id: 3,
    owner: 'User ID',
    place: 'Place ID',
    title: 'Title III',
    description: 'Description III',
    photos: ['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'],
    perks: ['perk I', 'perk II'],
    typeRoom: 'Type III',
    coupon: 1,
    numOfBed: 2,
    checkIn: '06/12/2023 12:00',
    checkOut: '07/12/2023 8:00',
    price: 1,
    ratings: 1,
    maxGuests: 1,
    countInStock: 1,
},];

export const getRoom = () => {
    const rooms = dataSource;
    return ({
        type: GET_ROOM,
        rooms: rooms
    });
};

export const addRoom = (room) => {

    return ({
        type: ADD_ROOM,
        room: room
    });
};

export const updateRoom = (room) => {

    return ({
        type: UPDATE_ROOM,
        room: room
    });
};

export const deleteRoom = _id => {

    return ({
        type: DELETE_ROOM,
        _id
    });
};