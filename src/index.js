import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import home from './pages/home'
const theme = createMuiTheme({
  palette: {
    primary: {
      main:'#902DF6',
    },
    secondary: {
      main: '#ffffff'
    }
  },
  typography: {

   fontFamily: 'Open Sans',
   fontSize: 16,

  },
});

ReactDOM.render(
  <React.StrictMode>
   <ThemeProvider theme = {theme}>

     <App />
    
 
    
  </ThemeProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
