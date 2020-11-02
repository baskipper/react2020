import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchUser} from "../store/actions";

const UserHeader = ({fetchUser, userId, user}) => {
    useEffect(() => {
        fetchUser(userId)
    }, [])

    return user ?
        (<div className='header'>{user.name}</div>)
                : null
}

const mapStateToProps = ({users}, ownProps) => {
    return {user: users.find(user => user.id === ownProps.userId)}
}

export default connect(mapStateToProps, {fetchUser})(UserHeader)
