import React, { Component } from 'react'
import {Route, withRouter} from "react-router";
import Login from "./containers/Login";
import Signup from './containers/signUp'
class Auth extends Component {
    render() {
        const { props, match } = this.props;
        return (
            <main>
                <Route exact path={match.url + '/login'} component={Login} />
                <Route exact path={match.url + '/signup'} component={Signup} />
            </main>
        )
    }
}



export default withRouter(Auth)