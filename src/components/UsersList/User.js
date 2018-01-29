import React from 'react'
import { Link } from 'react-router-dom'

const capitalizeFirstLetter = string => (string.charAt(0).toUpperCase() + string.slice(1))

const User = props => (
    <Link to={`/user-details/${props.user.email}`}>
        <div
            key={`${props.user.name.first}-${props.user.name.last}`}
            className="users"
        >
            {`${capitalizeFirstLetter(props.user.name.first)} ${capitalizeFirstLetter(props.user.name.last)}`}
            <img src={props.user.picture.medium} />
        </div>
    </Link>
)

export default User