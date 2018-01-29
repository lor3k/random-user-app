import React from 'react'
import { connect } from 'react-redux'
import UsersList from './components/UsersList'

const App = props => (
    <div>
        <UsersList
            usersData={props.usersData}
        />
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