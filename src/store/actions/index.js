import jsonPlaceholder from "../../APIs/jsonPlaceholder";
import _ from 'lodash'

export const fetchPostsAndUsers = () =>
     async (dispatch, getState) => {
        await dispatch(fetchPosts())

         _.chain(getState().posts)
             .map('userId')
             .uniq()
             .forEach(id => dispatch(fetchUser(id)))
             .value()
    }

export const fetchPosts = () =>
    async (dispatch, getState) => {
        const response = await jsonPlaceholder.get('/posts')
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        })
    }

export const fetchUser = (userId) =>
    async (dispatch, getState) => {
        const response = await jsonPlaceholder.get(`/users/${userId}`)
        dispatch({
            type: 'FETCH_USER',
            payload: response.data
        })
    }

//
//
// export const fetchUser = (userId) =>
//     (dispatch, getState) => {
//         _fetchUser(userId, dispatch)
//     }
//
//     const _fetchUser = _.memoize(async (userId, dispatch) => {
//         const response = await jsonPlaceholder.get(`/users/${userId}`)
//         dispatch({
//             type: 'FETCH_USER',
//             payload: response.data
//         })
//     })
//
