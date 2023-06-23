import { GET_BLOG, UPDATE_BLOG, DELETE_BLOG } from './types';

const dataSource = [{
    key: 1,
    title: `A`,
    content: '<b>Hotel Blog</b>',
    img: [{
        uid: '-1',
        name: 'image.png',
        status: 'done',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }],
},
{
    key: 2,
    title: `B`,
    content: '<b>Hotel Blog</b>',
    img: [{
        uid: '-1',
        name: 'image.png',
        status: 'done',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }],
},
{
    key: 3,
    title: `C`,
    content: '<b>Hotel Blog</b>',
    img: [{
        uid: '-1',
        name: 'image.png',
        status: 'done',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }],
}];

export const getBlog = () => {
    const blogs = dataSource;
    return ({
        type: GET_BLOG,
        blogs: blogs
    });
};

export const updateBlog = (blog) => {

    return ({
        type: UPDATE_BLOG,
        blog: blog
    });
};

export const deleteBlog = id => {

    return ({
        type: DELETE_BLOG,
        id
    });
};