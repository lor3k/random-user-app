import React from 'react'
import { connect } from 'react-redux'

const App = props => (
    <div>
        {
            props.usersData
            &&
            props.usersData.map(user => (
                <div
                    key={`${user.name.first}-${user.name.last}`}
                >
                    {`${user.name.first} ${user.name.last}`}
                </div>
            ))
        }
    </div>
)

const mapStateToProps = state => ({
    usersData: state.users.data
})

const mapDispatchToProps = state => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)