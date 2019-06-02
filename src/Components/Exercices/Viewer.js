import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core'
import {Catalog, Preview} from './'

const styles = theme=> ({
  paper: {
    padding:20,
    margin:5,
    height:"calc(100vh - 125px)",
    overflowY:"auto"
  },
  '@global':{
    'html, body, #root':{
      height:'100%'
    },
  },
  container:{
    [theme.breakpoints.up('sm')]:{
      height:'calc(100% - 64px - 48px)'
    },
    [theme.breakpoints.down('xs')]:{
      height:'calc(100% - 56px - 48px)'
    }

  }

})


const Viewer = ({classes})=>(
  <Grid container className={classes.container}>
    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper}>
        <Catalog/>
      </Paper>
    </Grid>
    <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <Preview/>
        </Paper>
    </Grid>
  </Grid>
)


export default withStyles(styles)(Viewer)
