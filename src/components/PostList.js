import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchPosts} from "../store/actions";

const PostList = ({fetchPosts}) => {
    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div>
            PostList
        </div>
    )
}

export default connect(null, {fetchPosts})(PostList)
