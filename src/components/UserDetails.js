import React from 'react'
import { withRouter } from 'react-router-dom'

const UserDetails = props => {
    const users = props.usersData || []
    const currentEmail = props.match.params.email
    const thisUser = users.find(user => user.email === currentEmail)

    const {
        name,
        picture
    } = thisUser

    return (
        <div>
            {thisUser ?
                <div>
                    <h1>{name.first} {name.last}</h1>
                    <h4>{currentEmail}</h4>
                    <img src={picture.large} />
                </div>
                : 'User does not exist'}
        </div>
    )
}

export default withRouter(UserDetails)