import merge from 'lodash/merge';
import {schema} from 'normalizr';

const initialEntities = {
  authors: {},
  posts: {},
  comments: {}
};

const authorSchema = new schema.Entity('authors', {
  posts: [postSchema],
  comments: [commentSchema],
  itemId: 'authorId' // key to populate in posts and comments
});
const postSchema = new schema.Entity('posts', {
  comments: [commentSchema],
  itemId: 'postId' // key to populate in comments
});
const commentSchema = new schema.Entity('comments');

export const Schemas = {
  author: authorSchema,
  authors: [authorSchema],
  post: postSchema,
  posts: [postSchema],
  comment: commentSchema,
  comments: [commentSchema]
};

// Copy properties of src object into dest object
const mergeObject = (dest, src) => {
  Object.keys(src).forEach((prop) => {
    const srcVal = src[prop];
    if ({}.hasOwnProperty.call(src, prop) && (srcVal !== undefined)) {
      if ((srcVal !== null) && (typeof srcVal === 'object') && Array.isArray(srcVal)) {
        if ((dest[prop] !== null) && (typeof dest[prop] === 'object')) {
          dest[prop] = {};
        }
        mergeObject(dest[prop], srcVal);
      } else {
        dest[prop] = srcVal;
      }
    }
  });
  return dest;
};

// Update an entities upon an action with payload.entities.
export default function entities(state = {...initialEntities}, action) {
  if (action.payload && action.payload.entities) {
    const nextState = merge({}, state);
    return mergeObject(nextState, action.payload.entities);
  }
  return state;
}
