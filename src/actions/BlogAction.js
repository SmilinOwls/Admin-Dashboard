import { GET_BLOG, ADD_BLOG, UPDATE_BLOG, DELETE_BLOG } from './types';

const dataSource = [{
    _id: '1',
    title: `A`,
    fullText: '<b>Hotel Blog</b>',
    image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
},
{
    _id: '2',
    title: `B`,
    fullText: '<b>Hotel Blog</b>',
    image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
},
{
    _id: '3',
    title: `C`,
    fullText: '<b>Hotel Blog</b>',
    image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}];

export const getBlog = () => {
    const blogs = dataSource;
    return ({
        type: GET_BLOG,
        blogs: blogs
    });
};

export const addBlog = (blog) => {

    return ({
        type: ADD_BLOG,
        blog: blog
    });
};

export const updateBlog = (blog) => {

    return ({
        type: UPDATE_BLOG,
        blog: blog
    });
};

export const deleteBlog = _id => {

    return ({
        type: DELETE_BLOG,
        _id
    });
};