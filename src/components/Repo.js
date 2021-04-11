import React from "react";

const Repo = ({repo}) => {
    return (
        <li className="list-group-item">
            <p>
              <i className="fas fa-code"></i>
               <span className={'pl-2 mr-2'}>
                      <a href={repo.html_url}>
                  {repo.name}
                 </a>
               </span>
                {repo.description}
            </p>
        </li>
    )
}

export default Repo;