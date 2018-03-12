import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom';

import style from './style/main.scss'
import Routes from './routes';

const element = document.getElementById('root');

render(<Provider store={ store }>
          <Routes />
      </Provider>,
      element);