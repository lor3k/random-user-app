const SET_USERS_DATA = 'users/SET_USERS_DATA'

const setUsersData = data => ({
    type: SET_USERS_DATA,
    data
})

export const fetchUsersData = value => (dispatch, getState) => {
    fetch(`https://randomuser.me/api/?results=${value}`)
        .then(response => response.json())
        .then(data => dispatch(setUsersData(data.results)))
}

const initialState = {
    data: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}