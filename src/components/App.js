import React from 'react';

import {
  Navigator
} from 'react-onsenui';

const renderPage = (route, navigator) => (
  <route.component key={route.key} navigator={navigator} />
);

const App = () => (
  // <Navigator
  //   renderPage={renderPage}
  //   initialRoute={{component: MainPage, key: 'MAIN_PAGE'}}
  //>
  <h1>Hey ee</h1>
);

export default App;
