import React from 'react'

const UsersList = props => (
    <div>
        {
            props.usersData
            &&
            props.usersData.map(user => (
                <div
                    key={`${user.name.first}-${user.name.last}`}
                    className="users"
                >
                    {`${user.name.first} ${user.name.last}`}
                </div>
            ))
        }
    </div>
)

export default UsersList