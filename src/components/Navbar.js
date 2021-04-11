import React from 'react';
import propTypes from 'prop-types'
import {Link} from "react-router-dom";
class Navbar extends React.Component {
    render() {
        return (
            <nav className={'navbar navbar-expand-sm navbar-dark bg-primary'}>
                <div className="container">
                    <Link to={'/'} className="navbar-brand">
                        <i className={this.props.icon}></i> {this.props.title}
                    </Link>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={'/about'} className={'nav-link'}>About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

Navbar.defaultProps = {
    icon  :'fab fa-github',
    title :'Github Finder'
}

Navbar.protoTypes = {
    icon : propTypes.string,
    title: propTypes.string.isRequired

}

export default Navbar;
