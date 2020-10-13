import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FV from './FormValidation'
import Lister from '../components/Lister'
import List from '@material-ui/core/List';
import Comments from '../datasource/CommentDataSource'
import Timer from '../components/timer'
import CircularProgress from '@material-ui/core/CircularProgress';
import Axios from 'axios';


class comment extends Component {

    

    constructor (props) {

        super(props);

        this.state = {
            Name: "",
            Organization:"",
            Comment: "",
            errors : {
                Name : "",
                Comment:"",
                Organization:""
            },
            loading: false,
            comments:[]
        }

        // this.caller = this.caller.bind(this)
    }


   async  componentDidMount(){
      
    //  const info = await caller() 
    //  console.log(info)

    Axios.get('/comment').then(res => {

       const {info,refs}  = res.data
       console.log(refs)

     
      info.length > 0 &&  this.setState({comments:info})
       
    
        }).catch(err => {


            console.log(err)
        })
        
    }

    deleteComment = (com) => {
  
        this.setState({loading:true})
        Axios.delete('/comment/'+com,(req,res) => {


            console.log('WTFFFF')
            this.setState({loading:false})

        }).catch(err => {

            console.log(err)
        })

        this.setState({loading:false})
            this.setState(prevState => {
                let commFilter = prevState.comments.filter((comi,index)=> {
                    return comi.id !=com
                })
                console.log(commFilter)
                return {comments:commFilter}
              
            })
            console.log("Working")


    }

 handleSubmit = () => {
       
        const {Name,Organization,Comment}= this.state;

        
       
        let Note = {Name:Name.trim(),Organization:Organization.trim(),Comment:Comment.trim()}
        var error= FV(Note)
      

        !error ? this.pushComments() : this.setState({errors:error})
       
    }

    handleClearAll = () => { this.setState({Name: "",Organization:"",Comment:""})  }

    pushComments = () => {
        const {Name,Organization,Comment} = this.state;
        let Note = {creator: Name,organization: Organization,comment: Comment}
   
        this.setState({loading:true});
       this.postComment(Note)
        // const here = await this.postComment(comment)
        this.setState({loading:false});
        
        this.handleClearAll()
        

    }

    async postComment (commenter){
      
      await Axios.post('/comment',commenter).then((post)=> {
            const {data:{comment}}= post
           
            this.setState({
                comments: [comment,...this.state.comments]
              })
            

        }).catch((err) => {
            console.log(err)
    
        })
       

    }

    handleClear = (e) => {
       e.persist()
       this.setState((state) => ({
        errors: {
           ...state.errors,
           [e.target.name]:""
        }
    }) )
}

handleUpdate = (e) => {
 
     this.setState({[e.target.name]:e.target.value})
   
}

    render() {
       
        return (

            <div>
 <div className="bio"  style={{paddingTop:'30px'}}> 

<h1>Comments</h1>
</div>
            
            <Grid justify= "center" style = {{marginBottom:'30px'}} container >
            <TextField   value = {this.state.Name}   onChange = {this.handleUpdate} onClick= {this.handleClear} name= "Name" error = {this.state.errors.Name.length>0 ? true: false} helperText= {this.state.errors.Name.length > 0 ? "Required Field" :" "} required  style = {{width:'25%'}} id="standard-required" label="Name" variant="outlined" />
            <TextField value = {this.state.Organization}  onChange = {this.handleUpdate} name= "Organization" onClick= {this.handleClear}  style = {{paddingBottom:'30px'}} style = {{width:'25%'}} id="outlined-basic" label="Organization" variant="outlined" />
           
            <Grid container style = {{marginTop:'.25%'}} justify= "center">
            <TextField  value = {this.state.Comment} onChange = {this.handleUpdate} name="Comment" onClick= {this.handleClear} error = {this.state.errors.Comment.length>0 ? true: false} helperText= {this.state.errors.Comment.length > 0 ? "Required Field" :" "}
            required 
          id="outlined-multiline-static"
          label="Comment"
          multiline
          rows={6}
          style = {{width:'50%'}}
         
          variant="outlined"
        />
        
            </Grid>
           <div width= "100%" style ={{height:'20px', color:'black'}}>

           </div>
            
         {this.state.loading ? <CircularProgress color ="primary"/> : <Button  justify="right" onClick = {this.handleSubmit} variant="contained" color="primary">
  Submit
</Button>}  
            </Grid>
            <Grid  justify= "center" container >

        {   this.state.comments.length >0  ?  <Lister  deletecomment = {(num)=> this.deleteComment(num)}   comments= {this.state.comments} /> : (this.state.loading ? <CircularProgress color ="primary"/> : null) } 
     
            </Grid>

            </div>
        )
    }
}

export default comment
