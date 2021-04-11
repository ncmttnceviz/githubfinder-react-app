import React,{useEffect,useContext} from 'react';
import Loading from "./Loading";
import Repos from "./Repos";
import GithubContext from "../context/github/GithubContext";

const UserDetail = ({match}) =>  {

    const {getUser,loading,user,repos,getRepos} = useContext(GithubContext);

    useEffect( () => {
            getUser(match.params.login);
            getRepos(match.params.login);
    },[])
        const {name,following,followers,public_repos,bio,location,blog,html_url,avatar_url} = user;
        if (loading) return <Loading/>
            return (
                <div className="container my-3">
                   <div className="row">
                       <div className="col-md-3 col-sm-12">
                           <div className="card">
                               <img src={avatar_url} alt={name} className="card-img-top"/>
                               <div className="card-body">
                                   <div className="card-text">{name}</div>
                                   <div className="card-text"><i className="fas fa-map-marker-alt"></i>{location}</div>
                               </div>
                               <div className="card-footer">
                                   <a href={html_url} target={'_blank'} className="btn btn-primary btn-sm btn-block">Go Profile</a>
                               </div>
                           </div>
                       </div>
                       <div className="col-md-9 col-sm-12">
                           <div className="card">
                               <div className="card-body">
                                   {
                                       bio &&
                                       <>
                                           <h5>About</h5>
                                           <p>{bio}</p>
                                       </>
                                   }
                                   {
                                       blog &&
                                       <>
                                           <h5>Blog</h5>
                                           <p>{blog}</p>
                                       </>
                                   }
                                   <div className="card-text">
                                       <span className="badge badge-primary m-1 p 2">Following : {following}</span>
                                       <span className="badge badge-danger m-1 p 2">Followers : {followers}</span>
                                       <span className="badge badge-success m-1 p 2">Repos : {public_repos}</span>
                                   </div>
                               </div>
                           </div>
                           <ul className="list-group list-group-flush">
                               <Repos repos={repos}/>
                           </ul>
                       </div>
                   </div>
                </div>
            )
}

export default UserDetail;