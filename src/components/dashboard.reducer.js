import {handleActions} from 'redux-actions';
import {Schemas} from '../store/entities';

const DASHBOARD_GET_POSTS_REQUEST = 'DASHBOARD_GET_POSTS_REQUEST';
const DASHBOARD_GET_POSTS_SUCCESS = 'DASHBOARD_GET_POSTS_SUCCESS';
const DASHBOARD_GET_POSTS_FAIL = 'DASHBOARD_GET_POSTS_FAIL';

const DASHBOARD_GET_AUTHORS_REQUEST = 'DASHBOARD_GET_AUTHORS_REQUEST';
const DASHBOARD_GET_AUTHORS_SUCCESS = 'DASHBOARD_GET_AUTHORS_SUCCESS';
const DASHBOARD_GET_AUTHORS_FAIL = 'DASHBOARD_GET_AUTHORS_FAIL';

const DASHBOARD_GET_AUTHOR_REQUEST = 'DASHBOARD_GET_AUTHOR_REQUEST';
const DASHBOARD_GET_AUTHOR_SUCCESS = 'DASHBOARD_GET_AUTHOR_SUCCESS';
const DASHBOARD_GET_AUTHOR_FAIL = 'DASHBOARD_GET_AUTHOR_FAIL';

const DASHBOARD_GET_COMMENTS_REQUEST = 'DASHBOARD_GET_COMMENTS_REQUEST';
const DASHBOARD_GET_COMMENTS_SUCCESS = 'DASHBOARD_GET_COMMENTS_SUCCESS';
const DASHBOARD_GET_COMMENTS_FAIL = 'DASHBOARD_GET_COMMENTS_FAIL';

const getPosts = () => {
  const url = '/posts';
  return {
    types: [DASHBOARD_GET_POSTS_REQUEST, DASHBOARD_GET_POSTS_SUCCESS, DASHBOARD_GET_POSTS_FAIL],
    xhr: {
      url,
      method: 'GET'
    },
    schema: Schemas.posts
  };
};

const getAuthors = () => {
  const url = '/authors';
  return {
    types: [DASHBOARD_GET_AUTHORS_REQUEST, DASHBOARD_GET_AUTHORS_SUCCESS, DASHBOARD_GET_AUTHORS_FAIL],
    xhr: {
      url,
      method: 'GET'
    },
    schema: Schemas.authors
  };
};

const getAuthor = (authorId) => {
  const url = `/authors/${authorId}`;
  return {
    types: [DASHBOARD_GET_AUTHOR_REQUEST, DASHBOARD_GET_AUTHOR_SUCCESS, DASHBOARD_GET_AUTHOR_FAIL],
    xhr: {
      url,
      method: 'GET'
    },
    payload: {authorId},
    schema: Schemas.author
  };
};

const getComments = () => {
  const url = '/comments';
  return {
    types: [DASHBOARD_GET_COMMENTS_REQUEST, DASHBOARD_GET_COMMENTS_SUCCESS, DASHBOARD_GET_COMMENTS_FAIL],
    xhr: {
      url,
      method: 'GET'
    },
    schema: Schemas.comments
  };
};

export const actions = {
  getPosts,
  getAuthors,
  getAuthor,
  getComments
};

export default handleActions({
  [DASHBOARD_GET_POSTS_REQUEST]: state => Object.assign({}, state, {
    getPostsError: null,
    gettingPosts: true
  }),
  [DASHBOARD_GET_POSTS_SUCCESS]: state => Object.assign({}, state, {
    gettingPosts: false
  }),
  [DASHBOARD_GET_POSTS_FAIL]: (state, payload) => Object.assign({}, {
    getPostsError: payload,
    gettingPosts: false
  }),
  [DASHBOARD_GET_AUTHORS_REQUEST]: state => Object.assign({}, state, {
    getAuthorsError: null,
    gettingAuthors: true
  }),
  [DASHBOARD_GET_AUTHORS_SUCCESS]: state => Object.assign({}, state, {
    gettingAuthors: false
  }),
  [DASHBOARD_GET_AUTHORS_FAIL]: (state, payload) => Object.assign({}, {
    getAuthorsError: payload,
    gettingAuthors: false
  }),
  [DASHBOARD_GET_AUTHOR_REQUEST]: state => Object.assign({}, state, {
    getAuthorError: null,
    gettingAuthor: true
  }),
  [DASHBOARD_GET_AUTHOR_SUCCESS]: state => Object.assign({}, state, {
    gettingAuthor: false
  }),
  [DASHBOARD_GET_AUTHOR_FAIL]: (state, payload) => Object.assign({}, {
    getAuthorError: payload,
    gettingAuthor: false
  }),
  [DASHBOARD_GET_COMMENTS_REQUEST]: state => Object.assign({}, state, {
    getCommentsError: null,
    gettingComments: true
  }),
  [DASHBOARD_GET_COMMENTS_SUCCESS]: state => Object.assign({}, state, {
    gettingComments: false
  }),
  [DASHBOARD_GET_COMMENTS_FAIL]: (state, payload) => Object.assign({}, {
    getCommentsError: payload,
    gettingComments: false
  })
}, {});
