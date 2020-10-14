import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Timer from '../components/timer'
import { extend } from 'dayjs';
import  utc from 'dayjs/plugin/utc'

const styles = createStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '50%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

Timer.extend(utc)

const setter = (t) => {
  // var test = Timer().from('1990',true)
  // var play = Timer(t).utc().local().format('YYYY-MM-DD').toString()
  var time = Timer().from(t,true)

//  console.log(play)

   return (time)
}

function makeListItems (comments,finish)  {
   
   return (comments.map((notes,key) => {
      
        return (
      
         <React.Fragment>
        <ListItem key= {key}   alignItems="flex-start">
        <ListItemAvatar>
          <Avatar color= "primary" alt={notes.creator} src= "None" />
          {/* {notes.creator} */}
        </ListItemAvatar>
       <ListItemText
          primary= 
       
            {notes.organization ? notes.organization : "Private"}
          
           
          secondary={
            <React.Fragment>
            
            {notes.comment} 
           </React.Fragment> 
           }
        />       
        {console.log(notes.id)}
        <ListItemIcon  onClick = {()=> finish(notes.id)}>
            <DeleteIcon className ="trashButton" />
        </ListItemIcon>
        <Typography   color = "primary" style= {{fontSize:'11px', position:'absolute',bottom:'0%',right:'3px'}} > {setter(notes.createdAt)}  </Typography>
        {/* setter(notes.CreatedAt) */}
        {/* {notes.createdAt} */}
      </ListItem>
      <Divider variant="inset" component="li" />
      </React.Fragment>

     )

        }) )
}

class  Lister extends React.Component {
  
  
 constructor(){
   super()
 }
 

  render () {
    const {classes} = this.props
    
return ( <List style = {{minWidth:'300px'}}  className={classes.root}>
      
        {makeListItems(this.props.comments, this.props.deletecomment)}

   </List> 
);
}
}

export default withStyles(styles)(Lister)