import {
    CLEAR_USERS,
    GET_REPOS,
    GET_USER,
    SET_LOADING,
    SEARCH_USERS,
} from '../types/githubTypes'

export const githubReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_USER: return {...state, user: payload, loading: false}
        case CLEAR_USERS: return {...state, users: [], loading: false}
        case SEARCH_USERS: return {...state, users: payload, loading: false}
        case SET_LOADING: return {...state, loading: true}
        case GET_REPOS: return {...state, repos: payload, loading: false}
        default: return state
    }
}
