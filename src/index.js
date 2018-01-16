import React from 'react';
import {render} from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {AppContainer} from 'react-hot-loader';

import App from './components/App';
import rootReducer from "./rootReducer";

import ons from 'onsenui';
import 'onsenui/css/onsenui.css';
import './styles/main.scss'

const logger = createLogger();

// TODO Create rootReducer later

const store = createStore(rootReducer,
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(thunk)
    : applyMiddleware(thunk, logger)
);

const rootElement = document.getElementById('root');

ons.ready(() => render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  rootElement
));

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>,
      rootElement
    );
  });
  module.hot.accept('./rootReducer', () => {
    const nextReducer = combineReducers(require('./rootReducer')).default;
    store.replaceReducer(nextReducer);
  });
}
