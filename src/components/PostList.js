import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchPosts} from "../store/actions";

const PostList = ({fetchPosts, posts}) => {
    useEffect(() => {
        fetchPosts()
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

export default connect(mapStateToProps, {fetchPosts})(PostList)
