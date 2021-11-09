import React from 'react';
import './App.css';
// import Home from './screens/Home/Home';
import Posts from './screens/Posts/Posts';
import PostCreate from './screens/PostCreate/PostCreate';
import PostEdit from './screens/PostEdit/PostEdit';
import PostDetail from './screens/PostDetail/PostDetail';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path="/posts/:id">
          <PostDetail/>
        </Route>
        
        <Route path="/posts/:id/edit">
          <PostEdit/>
        </Route>
        
        <Route path="/add-post">
          <PostCreate/>
        </Route>
        
        <Route path="/" >
          <Posts/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;