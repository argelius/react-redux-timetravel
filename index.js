import React from 'react';
import {render} from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import {AppContainer} from 'react-hot-loader';

import grid from './reducers/grid';
import App from './components/App';
import DevTools from './containers/DevTools';

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

const enhancer = compose(
  process.env.NODE_ENV === 'production'
    ? undefined
    : applyMiddleware(logger),
  DevTools.instrument()
);

const store = createStore(grid, initialState, enhancer);

const rootElement = document.getElementById('root');

render(
  <AppContainer>
    <Provider store={store}>
      <div>
        <App />
        <DevTools />
      </div>
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
          <div>
            <NextApp />
            <DevTools />
          </div>
        </Provider>
      </AppContainer>,
      rootElement
    );
  });
}
