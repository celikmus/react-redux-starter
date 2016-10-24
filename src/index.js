import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';
import AppRouter from './store/router';

require('./components/styles/main.scss');
const store = configureStore({});

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('main')
);
