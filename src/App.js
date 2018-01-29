import React from 'react'
import { connect } from 'react-redux'

const App = () => (
    <div>
        <h1>App</h1>
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