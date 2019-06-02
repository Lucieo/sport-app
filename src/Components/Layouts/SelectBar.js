import React,{Component} from 'react';
import {Paper, Tab, Tabs, withWidth} from '@material-ui/core';
import {withContext} from '../context'

class SelectBar extends Component{
  state={
    muscles: this.getMuscles()
  }

  getMuscles(){
    return ['', ...this.props.muscles]
  }

  onIndexSelect = (e,index)=>{
    return this.props.onCategorySelect(this.state.muscles[index])
  }

  getIndex =()=>{
    return this.state.muscles.indexOf(this.props.category)
  }

  render(){
    const {width}=this.props,
      {muscles}=this.state
    console.log(muscles)
    return(
      <div>
      <Paper>
        <Tabs
          value={this.getIndex()}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.onIndexSelect}
          centered={width!=="xs"}
          scrollable={width==="xs"}
        >
        {muscles.map(group=>
          <Tab
          label={group || 'all'}
          key={group}
          />
        )}
        </Tabs>
      </Paper>
      </div>
    )
  }
}

export default withContext(withWidth()(SelectBar))
