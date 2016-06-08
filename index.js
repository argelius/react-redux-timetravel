import React from 'react';
import {render} from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import {AppContainer} from 'react-hot-loader';

import grid from './reducers/grid';
import App from './components/App';

const logger = createLogger();

const initialState = {
  width: 10,
  height: 10,
  cells: [
    0, 0, 0, 1, 1, 1, 1, 0, 0, 0,
    0, 0, 1, 0, 0, 0, 0, 1, 0, 0,
    0, 1, 0, 0, 0, 0, 0, 0, 1, 0,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 1, 1, 1, 1, 0, 0, 1,
    0, 1, 0, 0, 0, 0, 0, 0, 1, 0,
    0, 0, 1, 0, 0, 0, 0, 1, 0, 0,
    0, 0, 0, 1, 1, 1, 1, 0, 0, 0
  ]
};

const store = createStore(grid,
  initialState,
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  process.env.NODE_ENV === 'production'
    ? undefined
    : applyMiddleware(logger)
);

const rootElement = document.getElementById('root');

render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  rootElement
);

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
}
