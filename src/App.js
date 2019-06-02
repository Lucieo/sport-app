import React, { PureComponent, Fragment } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import {Header, SelectBar} from './Components/Layouts'
import {Viewer} from './Components/Exercices'
import { muscles, exercises } from './store'
import {Provider} from './Components/context'

export default class extends PureComponent {
  state={
    exercises,
    exercise:{},
    editMode:false,
    category:''
  }

  getExercisesByMuscle(){
    const initExercises = muscles.reduce(
          (exercises, category) => ({
            ...exercises,
            [category]: []
          }),
          {}
        );
    return Object.entries(this.state.exercises.reduce((exercises, exercise)=>{
      //get muscle property from current exercise in exercises list
      const {muscle} = exercise

      //Store exercises by muscle key conditionnaly. Do we already have a key for this muscle in final object? If so add it to current key using array spread if not create new key
      exercises[muscle] = exercises[muscle]?
      [...exercises[muscle], exercise]
      :[exercise]
      return exercises
    }, initExercises)
    )
  }

  handleCategorySelect = category =>
    this.setState({
      category
    })


  handleExerciseSelect = id =>
    this.setState(({exercises}) =>({
      exercise: exercises.find(ex => ex.id === id),
      editMode:false
    }))


  handleExerciseCreate = exercise =>
    this.setState(({exercises})=>({
      exercises:[
        ...exercises,
        exercise
      ]
    }))


  handleExerciseDelete = id =>
    this.setState(({exercises, exercise, editMode})=>({
      exercises:exercises.filter((exerciseListed)=> exerciseListed.id !== id),
      editMode:exercise.id === id ? false : editMode,
      exercise:exercise.id === id ? {} : exercise
    }))


  handleExerciseSelectEdit = id =>
    this.setState(({exercises}) =>({
      exercise: exercises.find(ex => ex.id === id),
      editMode:true
    }))

  handleExerciseEdit = exercise =>
  //Find all exercises that don't have the id of current exercise being edited, filter them and add new exercise modified to exercises list
  //also modify current exercise being edited to display changes
  this.setState(({exercises})=>({
    exercises : [
      ...exercises.filter(ex => ex.id !== exercise.id),
      exercise
    ],
    exercise
  }))

  getContext = () =>({
    ...this.state,
    muscles,
    exercisesByMuscle: this.getExercisesByMuscle(),
    onCreate:this.handleExerciseCreate,
    onCategorySelect:this.handleCategorySelect,
    onEdit: this.handleExerciseEdit,
    onSelectEdit : this.handleExerciseSelectEdit,
    onDelete:this.handleExerciseDelete,
    onSelect:this.handleExerciseSelect
  })

  render() {
    const exercises = this.getExercisesByMuscle();
    const {category, exercise, editMode}= this.state
    return (
      <Provider value={this.getContext()}>
      <CssBaseline />
        <Header/>
        <SelectBar/>
        <Viewer/>
      </Provider>
    );
  }
}
