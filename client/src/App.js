import React from 'react';
import { Route } from "react-router-dom"
import './App.css';

import Layout from './components/shared/Layout/Layout'

function App() {
  return (<div>
    <Route path="/" exact>
      <Layout />
    </Route>
  </div>);
}

export default App;
