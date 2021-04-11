import React, {Component} from 'react';
import loading from '../../loading.gif';
class Loading extends Component {
    render() {
        return (
            <div className="parent">
                <img src={`/${loading}`} alt="" className="child"/>
            </div>
        );
    }
}

export default Loading;