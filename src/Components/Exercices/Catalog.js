import React, {Fragment} from 'react'
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {withContext} from "../context"

const Catalog = ({
  exercisesByMuscle,
  category,
  onSelect,
  onDelete,
  onSelectEdit,
  onEdit,
  })=>(
  exercisesByMuscle.map(([group, exercises])=>
    (!category || category===group)
    &&
    <Fragment
      key={group}
    >
      <Typography
        variant="h6"
      >
        {group}
        <List component="ul">
        {exercises.map(({title, id})=>
          <ListItem
          button
          onClick={()=>onSelect(id)}
          key={id}
          >
            <ListItemText primary={title} />
            <ListItemSecondaryAction>
              <IconButton onClick={()=> onDelete(id)}>
                <DeleteIcon />
              </IconButton>
              <IconButton onClick={()=> onSelectEdit(id)}>
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        )}
         </List>
      </Typography>
    </Fragment>
  )
)

export default withContext(Catalog);
