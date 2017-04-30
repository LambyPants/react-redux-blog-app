import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import promise from 'redux-promise';
import PostIndex from './components/posts';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import reducers from './reducers';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <Router>
  <div>
  <Switch>
     <Route path="/posts/new" component={PostsNew}/>
     <Route path="/posts/:id" component={PostsShow}/>
      <Route path="/" component={PostIndex}/>
     
  </Switch>
    </div>
  </Router>
  </Provider>,
  document.getElementById('root')
);