import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './style';
import { GlobalIconfontStyle } from './statics/iconfont/iconfont'

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <GlobalIconfontStyle />
    <App />
  </Fragment>,
  document.getElementById('root')
);
