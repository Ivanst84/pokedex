import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, compose,legacy_createStore as createStore } from 'redux';
import rootReducer from './reduce/rootReducer';

import thunk from 'redux-thunk';
import { logger} from './middlewares';
const root = ReactDOM.createRoot(document.getElementById('root'));
  
 const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ || compose;
 const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));
   
  const store = createStore(rootReducer,composedEnhancers)
 
root.render(
  <React.StrictMode>
    <Provider store ={store}>
    
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
