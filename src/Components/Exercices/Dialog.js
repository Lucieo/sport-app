import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import {Form} from './'
import {ExercisesContext} from '../context'



class CreateDialog extends Component {
  state={
    open:false
  }

  static contextType =  ExercisesContext

  handleToggle = ()=>{
    this.setState({
      open : !this.state.open
    })
  }

  handleFormSubmit = exercise =>{
    //Close dialog
    this.handleToggle()
    this.context.onCreate(exercise)
  }


  render(){
    const {open}=this.state,
    {muscles}=this.context

    return(
      <>
        <Fab
          aria-label="Add"
          onClick={this.handleToggle}
          size="small"
          color="secondary"
          >
          <AddIcon />
        </Fab>
       <Dialog
         open={open}
         onClose={this.handleToggle}
         fullWidth
         maxWidth={'xs'}
       >
         <DialogTitle>
         Create a New Exercise
         </DialogTitle>
         <DialogContent>
           <DialogContentText>
            Please fill ou the form below
           </DialogContentText>

           <Form
            muscles={muscles}
            onSubmit={this.handleFormSubmit}
           />

         </DialogContent>
       </Dialog>
      </>
    )
  }
}

export default CreateDialog
