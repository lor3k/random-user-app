import React from 'react'
import { withRouter } from 'react-router-dom'

const UserDetails = props => {
    const users = props.usersData || []
    const currentEmail = props.match.params.email
    const thisUser = users.find(user => user.email === currentEmail)
    return (
        <div>
            {thisUser ?
                <div>
                    <h1>{thisUser.name.first} {thisUser.name.last}</h1>
                    <h4>{currentEmail}</h4>
                    <img src={thisUser.picture.large} />
                </div>
                : 'User does not exist'}
        </div>
    )
}

export default withRouter(UserDetails)