import React from 'react'
import User from './User'

const UsersList = props => (
    <div className="list">
        {
            props.usersData
            &&
            props.usersData.map(user => <User user={user} />)
        }
    </div>
)

export default UsersList