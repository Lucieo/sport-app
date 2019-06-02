import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {CreateDialog} from "../Exercices"



export default () =>
<AppBar position="static">
  <Toolbar>
    <Typography
    variant="h5"
    color="inherit"
    style={{flex:1}}
    >
      Exercices Database
    </Typography>
    <CreateDialog/>
  </Toolbar>
</AppBar>
