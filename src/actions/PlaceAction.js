import { GET_PLACE, ADD_PLACE, UPDATE_PLACE, DELETE_PLACE } from './types';

const dataSource = [{
    _id: '1',
    name: 'Name I',
    address: 'Address I',
    sites: 'Site ID',
    country: 'Country I',
    placePic: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    description: 'description',
    extraInfo: 'extraInfo',
    ratings: 0,
    numReviews: 0,
    reviews: [
        {
            user: 'User ID',
            name: 'Name I',
            rating: 1,
            comment: "comment"
        }
    ]
},
{
    _id: '2',
    name: 'Name II',
    address: 'Address II',
    sites: 'Site ID',
    country: 'Country II',
    placePic: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    description: 'description',
    extraInfo: 'extraInfo',
    ratings: 0,
    numReviews: 0,
    reviews: [
        {
            user: 'User ID',
            name: 'Name II',
            rating: 1,
            comment: "comment"
        }
    ]
},
{
    _id: '3',
    name: 'Name III',
    address: 'Address III',
    sites: 'Site ID',
    country: 'Country II',
    placePic: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    description: 'description',
    extraInfo: 'extraInfo',
    ratings: 0,
    numReviews: 0,
    reviews: [
        {
            user: 'User ID',
            name: 'Name III',
            rating: 1,
            comment: "comment"
        }
    ]
},
];

export const getPlace = () => {
    const places = dataSource;
    return ({
        type: GET_PLACE,
        places: places
    });
};

export const addPlace = (place) => {

    return ({
        type: ADD_PLACE,
        place: place
    });
};

export const updatePlace = (place) => {

    return ({
        type: UPDATE_PLACE,
        place: place
    });
};

export const deletePlace = _id => {

    return ({
        type: DELETE_PLACE,
        _id
    });
};