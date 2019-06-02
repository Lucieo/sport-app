import React, {Component, Fragment} from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {withStyles} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import {withContext} from '../context'



class Form extends Component{
  state=this.getInitialState()


  getInitialState(){
    const {exercise}=this.props
    return exercise? exercise : {
      title:'',
      description:'',
      muscles:''
    }
  }

    handleChange =({target:{value, name}}) =>{
      this.setState({
          [name]:value
      })
    }

    handleSubmit = ()=>{
      this.props.onSubmit({
      id:this.state.title.toLowerCase().replace(/ /g, '-'),
      ...this.state
      });

    }

  render(){
    const {title, description, muscle} = this.state,
          {muscles, exercise} = this.props;
    console.log(muscle)
    return(
      <form>
        <TextField
          autoFocus
          margin="normal"
          label="Title"
          type="text"
          fullWidth
          value={title}
          onChange={this.handleChange}
          name='title'
          fullWidth
        />
        <br/>
      <TextField
        autoFocus
        margin="normal"
        label="Description"
        type="text"
        multiline
        rows="4"
        fullWidth
        value={description}
        onChange={this.handleChange}
        name="description"
      />
      <br/>

      <FormControl margin="normal" >
        <InputLabel htmlFor="muscles">
          Muscles
        </InputLabel>
        <Select
          value={muscle}
          onChange={this.handleChange}
          name='muscle'
        >
          {muscles.map(category=>
            <MenuItem
              value={category}
              key={category}
              >{category}</MenuItem>
          )}
        </Select>
      </FormControl>
      <br/>
        <Button
          color="primary"
          variant="contained"
          onClick={this.handleSubmit}
          disabled={!title || !muscle }
          >
          {exercise ? "Edit" : "Create"}
        </Button>

      </form>
    )
  }
}

export default withContext(Form)
