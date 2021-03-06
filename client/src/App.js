import React from 'react';
import Nav from "./shared/Nav/Nav"
import Footer from "./shared/Footer/Footer"
import { Route } from "react-router-dom"
import './App.css';

function App() {
  return (<div>
    <Route path="/" exact>
      <Nav />
    </Route>
    <Route path="/" exact>
      <Footer />
 </Route>
  </div>);
}

export default App;
