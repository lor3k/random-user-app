import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import UsersList from './components/UsersList'
import UserDetails from './components/UserDetails'

const App = props => (
    <BrowserRouter>
        <div>
            <Route path="/" exact render={() => (
                <UsersList usersData={props.usersData} />
            )} />
            <Route path="/user-details/:email" render={() => (
                <UserDetails usersData={props.usersData} />
            )} />
        </div>
    </BrowserRouter>
)

const mapStateToProps = state => ({
    usersData: state.users.data
})

const mapDispatchToProps = state => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)