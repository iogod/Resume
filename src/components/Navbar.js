import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


import NavItem from './NavItem'


 class Navbar extends Component {
  

    render() {
      const names = ["about","experience", "skills","comment","contact"]
      const items = names.map((namer,index) => {
       return ( <NavItem key = {index} name = {namer}/>)
      })
      
        return (
            <div>
             <AppBar  m= {200} style={{ background: 'transparent', boxShadow: 'none'}} position="fixed">
        <Toolbar  >
    
       {items}
         
        </Toolbar>
      </AppBar>
            </div>
        )
    }
}

export default Navbar
