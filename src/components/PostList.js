import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchPostsAndUsers } from "../store/actions";

import UserHeader from "./UserHeader";

const PostList = ({fetchPostsAndUsers, posts}) => {
    useEffect(() => {
        fetchPostsAndUsers()
    }, [])

    const renderList = () =>
        posts.map(post =>
        <div className='item' key={post}>
            <i className="large middle aligned icon user" />
            <div className="content">
                <div className="description">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
                <UserHeader userId={post.userId}/>
            </div>
        </div>
        )

    return (
        <div>
            {renderList()}
        </div>
    )
}

const mapStateToProps = ({posts}) => {
    return {posts}
}

export default connect(mapStateToProps, {fetchPostsAndUsers})(PostList)
