import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import * as theme from './config/theme';

ReactDOM.render(
  <BrowserRouter>  
    <ThemeProvider theme={theme}>
      <Route path="/" component={ App }/>
    </ThemeProvider>
  </BrowserRouter>
, document.getElementById('root'));

