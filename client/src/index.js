import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

console.log(process.env.NODE_ENV);
// tell app is in dev mode or pro mode

ReactDOM.render(<React.StrictMode>
  <Provider store={store}>
    <App/>
  </Provider>
</React.StrictMode>, document.getElementById('root'));
