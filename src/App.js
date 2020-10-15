import React from 'react';
import './App.css';
import Main from './Main'
import Navbar from './components/Navbar'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home'
import Comment from './pages/comment'
import Skills from './pages/skills'
import Experience from './pages/experience'
import Contact from  './pages/contact'
import Background from "./components/Background"







function App() {
  return (
    
    <div className="App">
   
   
    <Router  basename='/Resume'>

    <Navbar/>
    <Background/>
     <Switch>
    <Route exact path = "/Resume" key = {1} component = {Main}/>
    <Route exact path = "/about" key = {2} component = {Home}></Route>
    <Route exact path = "/experience" key = {3} component = {Experience}></Route>
    <Route exact path = "/comment" key = {4} component = {Comment}></Route>
    <Route exact path = "/skills" key = {5} component = {Skills}></Route>
    <Route exact path = "/contact" key = {6} component = {Contact}></Route>
  
    </Switch>
    </Router>
    </div>
    
  )
}

export default App;
