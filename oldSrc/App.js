import React, { Component } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router'
import {connect} from "react-redux";
import BottomBar from "./containers/BottomBar";
import Login from "./containers/Login";
import Auth from './Auth'
import Home from "./containers/Home";
import AppContent from "./AppContent";

const isLoggedIn = connect(state => ({
    isLoggedIn: state.auth.isLoggedIn,
}));

const PrivateRoute = isLoggedIn(
    ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={props =>
                rest.isLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/auth/login',
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    ),
);


class App extends Component {
  render() {
    return (
        <div>
            <Route path="/auth" component={Auth}/>
            <PrivateRoute path="/" component={AppContent}/>
        </div>
    );
  }
}



export default withRouter(connect()(App));
