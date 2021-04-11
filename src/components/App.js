import React from 'react';
import { BrowserRouter, Switch ,Route,} from 'react-router-dom'
import Home from './Home';
import About from "./About";
import NotFound from "./NotFound";
import Navbar from './Navbar'
import UserDetail from "./UserDetail";
import Alert from "./Alert";
import GithubState from "../context/github/GithubState";
import AlertState from "../context/alert/AlertState";


const App = () => {
        return (
            <GithubState>
                <AlertState>
                    <BrowserRouter>
                        <Navbar/>
                        <Alert/>
                        <Switch>
                            <Route exact path={'/'} component={Home}/>
                            <Route path={'/about'} component={About}/>
                            <Route path={'/user/:login'} component={UserDetail} />
                            <Route component={NotFound}/>
                        </Switch>
                    </BrowserRouter>
                </AlertState>
            </GithubState>

        );
}

export default App;
