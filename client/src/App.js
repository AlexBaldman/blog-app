import React from 'react';
import { Route } from "react-router-dom"
import './App.css';

function App() {
  return (<div>
    <Route path="/" exact>
      <Layout />
    </Route>
  </div>);
}

export default App;
