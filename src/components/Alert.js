import React,{useContext} from 'react';
import AlerContext from '../context/alert/AlertContext';
const Alert = () => {

    const {alert} = useContext(AlerContext)

    return(
        alert !== null && (
            <div className="container my-2">
                <div className={`alert alert-${alert.type}`}>
                    {alert.msg}
                </div>
            </div>
        )
    )
}

export default Alert;