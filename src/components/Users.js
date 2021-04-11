import React, {useContext} from 'react';
import Loading from "./Loading";
import User from './User';
import GithubContext from "../context/github/GithubContext";

const Users = () => {
    const githubContext = useContext(GithubContext);
    const {loading,users} = githubContext;
        if (loading){
            return (
                <Loading/>
            );
        }else {
            return (
                <div className='container'>
                    <div className="row">
                        {
                            users.map(user => (
                                <User key={user.id} user={user} />
                            ))
                        }
                    </div>
                </div>
            );
        }
}

export default Users;
