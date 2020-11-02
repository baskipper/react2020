import jsonPlaceholder from "../../APIs/jsonPlaceholder";

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
    // console.log('looking for ', userId)
        const response = await jsonPlaceholder.get(`/users/${userId}`)
        dispatch({
            type: 'FETCH_USER',
            payload: response.data
        })
    }

