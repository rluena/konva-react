import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom';

import Routes from './routes';  

const element = document.getElementById('app');

render(<Provider store={ store }>
          <Routes />
      </Provider>
);