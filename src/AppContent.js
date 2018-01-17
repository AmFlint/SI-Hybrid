import React, { Component } from 'react'
import {Route, Switch} from "react-router";
import Home from "./containers/Home";
import BottomBar from "./containers/BottomBar";


export default class AppContent extends Component {
    render() {

        return (
            <div>
                <Route exact path={'/home'}  component={Home}/>
                <BottomBar/>
            </div>
        )
    }
}