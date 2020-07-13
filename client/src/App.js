import React from 'react';
import Nav from "./components/shared/Nav/Nav"
import { Route } from "react-router-dom"
import './App.css';

function App() {
  return (<div>
    <Route path="/" exact>
      <Nav />
 </Route>
  </div>);
}

export default App;
