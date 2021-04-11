import React, {Component} from 'react';
import {Link} from "react-router-dom";

class User extends Component {
    render() {
        const {login,avatar_url,html_url} = this.props.user;
        return (
            <div className='col-lg-4 col-md-4 col-sm-6 mt-2'>
                <div className={'card m-4'}>
                    <img src={avatar_url} alt="" className={'card-img'}/>
                    <div className="card-body">
                        <div className="card-title">
                            <h5>{login}</h5>
                        </div>
                        <div className="card-footer">
                             <Link to={`/user/${login}`} className="btn btn-sm btn-primary" >Go Profile</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default User;
