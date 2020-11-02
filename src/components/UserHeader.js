import React from 'react'
import {connect} from 'react-redux'

const UserHeader = ({user}) => {

    return user ?
        (<div className='header'>{user.name}</div>)
                : null
}

const mapStateToProps = ({users}, ownProps) => {
    return {user: users.find(user => user.id === ownProps.userId)}
}

export default connect(mapStateToProps)(UserHeader)
