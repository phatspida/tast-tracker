import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"
import AddTask from './components/AddTask'


const App = () => {
  //Deletes a Task
  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Sets a green left border when toggled(double clicked)
  const onToggle = (id) => {
    setTasks(tasks.map((task) => (task.id === id)? {...task, reminder : !task.reminder} : task))
  }

  //Creates an id for the new data and adds it to the existing task list.
  const submitData = (incoming_data) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...incoming_data}
    setTasks([...tasks, newTask])
  }

  //Creates a state to show and hide the add-task form upon clicking
  const [showAddTasks, setshowAddTasks] = useState(false)

  const onClick = (e) => {
    e.preventDefault()
    setshowAddTasks(!showAddTasks)
    
  }


  //Existing tasks to keep track of 
  const [tasks, setTasks] = useState(
    [
      {
          id: 1,
          text: 'Doctors Appointment',
          day: 'Feb 5th at 2:30pm',
          reminder: true,
      },
      {
          id: 2,
          text: 'Meeting at School',
          day: 'Feb 6th at 2:30pm',
          reminder: true,
      },
      {
          id: 3,
          text: 'Food Shopping',
          day: 'Feb 5th at 2:30pm',
          reminder: false,
      },
  ]
  )

  return (
    <div className="container">
        <Header onClick = {onClick} showAddTasks = {showAddTasks}/>
        {showAddTasks? <AddTask submitData = {submitData}/>: ''}
        {tasks.length > 0? <Tasks tasks = {tasks} onDelete = {onDelete} onToggle = {onToggle}/>: 
        'No Task to keep track of! Kindly add a task'} 
        
    </div>
  )
}

export default App
