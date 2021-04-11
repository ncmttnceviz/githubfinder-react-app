import React, {useReducer} from "react";
import GithubReducer from "./GithubReducer";
import GithubContext from "./GithubContext";
import axios from "axios";

const GithubState = (props) => {
    const initialState = {
        users : [],
        user : {},
        repos : [],
        loading:false,
    }

    const [state,dispatch] = useReducer(GithubReducer,initialState);

    const  searchUser = (keyword) => {
        setLoading();
        axios
            .get(`https://api.github.com/search/users?q=${keyword}`)
            .then(res =>{
               dispatch({
                   type:"SEARCH_USERS",
                   payload: res.data.items
               })
            })
    }

    const  clearUsers = () => {
        dispatch({
            type:'CLEAR_USERS'
        })
    }

    const getUser = (username) => {
        setLoading();
        axios
            .get(`https://api.github.com/users/${username}`)
            .then(res => {
                dispatch({
                    type:'GET_USER',
                    payload: res.data
                })
            });
    }

    const getRepos = (username) => {
        setLoading();
        axios
            .get(`https://api.github.com/users/${username}/repos`)
            .then(res => {
                dispatch({
                    type:'GET_REPOS',
                    payload:res.data,
                    loading: false
                })
            })
    }



    const setLoading = () =>{
        dispatch({type:'SET_LOADING'});
    }


    return <GithubContext.Provider
        value = {{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUser,
            clearUsers,
            getUser,
            getRepos
        }}
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;