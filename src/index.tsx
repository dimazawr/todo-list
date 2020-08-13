import '@csstools/normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { rootReducer } from './redux/rootReducer';
import { throttle } from 'lodash';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from './localStorage';

import './index.scss';
import { recordingTodosMiddleware } from './redux/recordingTodosMiddleware';

const middlewares = [recordingTodosMiddleware, thunk]

const composeEnhancers =  composeWithDevTools(applyMiddleware(...middlewares));

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, composeEnhancers
    
  );

  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
;
