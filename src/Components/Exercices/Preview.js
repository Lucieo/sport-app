import React from 'react'
import {Typography} from '@material-ui/core';
import {Form} from './'
import {withContext} from "../context"

const Preview = ({
  muscles,
  editMode,
  exercise,
  exercise:{
    id,
    title,
    description
  },
  onEdit
}) =>(
  <>
    <Typography
      variant="h5"
      gutterBottom
    >
    {title || 'Welcome!'}
    </Typography>
    {
      editMode
      ? <Form
        key={id}
        muscles={muscles}
        onSubmit={onEdit}
        exercise={exercise}
      />
      :
        <Typography
          variant="subheading"
        >
        {description || "Please select an exercise from the list on the left."}
        </Typography>
    }
  </>
)

export default withContext(Preview)
