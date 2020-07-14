/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import Main from './component/celander/Main';
import Navigation from './component/navigation';
import {createStore, applyMiddleware, compose} from 'redux';
import {PersistGate} from 'redux-persist/integration/react';
import logger from 'redux-logger';
import reducerMain from './src/reducers';
const middleware = [];
middleware.push(logger);
const store = createStore(reducerMain, compose(applyMiddleware(...middleware)));

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
