import React from 'react';
import './App.css';
import Main from './Main'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home'
import Comment from './pages/comment'
import Skills from './pages/skills'
import Experience from './pages/experience'
import Education from './pages/education'
import Stack from  './pages/stack'
import Contact from  './pages/contact'
import Background from "./components/Background"







function App() {
  return (
    
    <div className="App">
   
   
    <Router>
   
    {/* <Main/> */}
    <Navbar/>
    <Background/>
     <Switch>
    <Route exact path = "/" key = {1} component = {Main}/>
    <Route exact path = "/about" key = {2} component = {Home}></Route>
    <Route exact path = "/education" key = {3} component = {Education}></Route>
    <Route exact path = "/experience" key = {4} component = {Experience}></Route>
    <Route exact path = "/comment" key = {5} component = {Comment}></Route>
    <Route exact path = "/skills" key = {6} component = {Skills}></Route>
    <Route exact path = "/contact" key = {7} component = {Contact}></Route>
    <Route exact path = "/stack" key = {8} component = {Stack}></Route>
    </Switch>
    </Router>
    </div>
    
  )
}

export default App;
