import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




function Descriptor(props)  {

  

  
    return (

    <Card  style = {{ minWidth:'400px' ,maxHeight:'400px',margin:'20px', padding :'10px'}}  >  
       <CardActionArea>
        <CardMedia
        onClick = {props.onClicker}
        style = {{height:'200px',objectFit: 'cover'}}
          image={props.item.image}
          title="Contemplative Reptile"
        />
        <CardContent>
       
          <Typography gutterBottom variant="h6" component="p">
         
          {props.item.university}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.item.city + ','} {props.item.state}
          <p> {props.item.role} </p>
          <Button  style = {{position:'absolute',bottom:'0',right:'0px'}}   size="small" color="primary" onClick = {props.onClicker}>
        Details
        </Button>
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
    
        
       
      </CardActions>
    </Card>);
}


export default Descriptor