import React,{useState,useContext} from 'react';
import GithubContext from "../context/github/GithubContext";
import AlertContext from  "../context/alert/AlertContext";

const Search = (props) => {

  const {searchUser,clearUsers,users} = useContext(GithubContext);
  const {setAlert} = useContext(AlertContext);

  const [keyword,setKeyword] = useState('')

  const onChange = (e) => {
        setKeyword(e.target.value)
    }

  const onSubmit = (e) => {
        e.preventDefault();
        if (keyword === '')
        {
            setAlert('Please enter a keyword','danger');
        }else {
            searchUser(keyword)
            setKeyword('');
        }
    }

   const clearResult =() => {
       clearUsers();
    }
        return(
            <div className="container my-3">
                <form action="#" onSubmit={onSubmit} autoComplete={'off'}>
                    <div className="input-group">
                        <input type="text" value={keyword} className="form-control" onChange={onChange}/>
                        <div className="input-group-append">
                            <button className='btn btn-primary'>Search User</button>
                        </div>
                    </div>
                </form>
                {
                    users.length>0 && <button onClick={clearResult} className="btn btn-outline-danger btn-block mt-2">Clear Result</button>
                }
            </div>
        )
}

export default Search;