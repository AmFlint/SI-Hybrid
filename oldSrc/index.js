import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';


import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { createStore, compose, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import reducers from './rootReducer';
import createHashHistory from 'history/createHashHistory';
import ons from 'onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './styles/main.scss'

const store = createStore(
    reducers,
    {},
    compose(applyMiddleware(ReduxPromise, ReduxThunk)),
);

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Helvetica, "sans-serif"',
        subheading: {
            fontWeight: 200,
        },
    },
});
const history = createHashHistory();



ons.ready(() => render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <Router history={history}>
                <App />
            </Router>
        </MuiThemeProvider>
    </Provider>,

    document.getElementById('root')));
