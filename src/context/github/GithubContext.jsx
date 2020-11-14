import React, {createContext, useReducer} from 'react'
import {githubReducer} from "./githubReducer";
import axios from 'axios'
import {SEARCH_USERS, SET_LOADING, GET_REPOS, GET_USER, CLEAR_USERS} from '../types/githubTypes'

const http = axios

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

export const GithubContext = createContext({})
export const GithubState = ({children}) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }
    const init = (initialState) => {
        return initialState
    }
    const [state, dispatch] = useReducer(githubReducer, initialState, init)
    const setLoading = () => dispatch({type: SET_LOADING})
    const clearUsers = () => dispatch({type: CLEAR_USERS})
    const withCredits = url => (
        `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    )
    const search = async value => {
        setLoading()
        await http.get(withCredits(`https://api.github.com/search/users?q=${value}&`))
            .then(res => {
                dispatch({
                    type: SEARCH_USERS,
                    payload: res.data.items
                })
            })
    }
    const getUser = async name => {
        setLoading()
        await http.get(withCredits(`https://api.github.com/users/${name}?q=`))
            .then(res => {
                console.log('getUser res: ', res)
                dispatch({
                    type: GET_USER,
                    payload: res.data
                })
            })
        //    ...

    }
    const getRepos = async name => {
        setLoading()
        await http.get(withCredits(`https://api.github.com/users/${name}/repos?rep_page=10&`))
            .then(res => {
                console.log('getUser res: ', res)
                dispatch({
                    type: GET_REPOS,
                    payload: res.data
                })
            })

    }
    const {user, users, repos, loading} = state
    return (
        <GithubContext.Provider value={{
            search, setLoading, getRepos, getUser, clearUsers,
            user, users, repos, loading
        }}>
            {children}
        </GithubContext.Provider>
    )
}
