import { GET_USER, UPDATE_USER, DELETE_USER } from './types';

const dataSource = [{
    _id: 1,
    username: `Name I`,
    email: 'email1@gmail.com',
    password: 'password1',
    phone: '0812431293',
    isAdmin: true,
    profilePic: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    resetPasswordToken: '123',
    resetPasswordExpire: Date('12/12/2025')
},
{
    _id: 2,
    username: `Name II`,
    email: 'email2@gmail.com',
    password: 'password1',
    phone: '0812431293',
    isAdmin: false,
    profilePic: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    resetPasswordToken: '123',
    resetPasswordExpire: Date('12/12/2025')
},
{
    _id: 3,
    username: `Name III`,
    email: 'email3@gmail.com',
    password: 'password1',
    phone: '0812431293',
    isAdmin: false,
    profilePic: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    resetPasswordToken: '123',
    resetPasswordExpire: Date('12/12/2025')
},
{
    _id: 4,
    username: `Name IV`,
    email: 'email4@gmail.com',
    password: 'password1',
    phone: '0812431293',
    isAdmin: true,
    profilePic: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    resetPasswordToken: '123',
    resetPasswordExpire: Date('12/12/2025')
},
];

export const getUser = () => {
    const users = dataSource;
    return ({
        type: GET_USER,
        users: users
    });
};


export const updateUser = (user) => {
    return ({
        type: UPDATE_USER,
        user: user
    });
};

export const deleteUser = _id => {

    return ({
        type: DELETE_USER,
        _id
    });
};