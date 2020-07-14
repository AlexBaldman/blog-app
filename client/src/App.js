import React from 'react';
import { Route, Switch } from "react-router-dom"
import Posts from './screens/Posts/Posts'
import PostCreate from './screens/PostCreate/PostCreate'
import PostEdit from './screens/PostEdit/PostEdit'
import PostDetail from './screens/PostDetail/PostDetail'
import Home from './screens/Home/Home'
import './App.css';

import Layout from './components/shared/Layout/Layout'

function App() {
  return (<div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path='/posts' component={Posts}/>
      <Route exact path='/add-post' component={PostCreate}/>
      <Route exact path='/posts/:id/edit' component={PostEdit}/>
      <Route exact path='/products/:id' component={PostDetail}/>
    </Switch>
  </div>
  );
}

export default App;
