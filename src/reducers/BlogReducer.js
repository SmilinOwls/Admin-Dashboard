// blogReducer.js

import { GET_BLOG, UPDATE_BLOG, DELETE_BLOG }from '../actions/types';

export default function BlogReducer(state = [], action) {
  switch (action.type) {
    case GET_BLOG:
      return state.length !== 0 ?  state : action.blogs;
    case UPDATE_BLOG:
        const data = [...state];
        const idx = data.findIndex(blog => blog.key === action.blog.key);
        if(idx > -1){
            data.splice(idx, 1, {
                ...action.blog,
            });
        } else{
            data.push(action.blog);
        }
      return data;
    case DELETE_BLOG:
      return state.filter(blog => blog.key !== action.id);
    default:
      return state;
  }
}