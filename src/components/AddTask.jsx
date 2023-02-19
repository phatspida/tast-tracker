import React from 'react'
import {useState} from 'react'

const AddTask = ({submitData}) => {

  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmitData = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please enter text!')
      return
    }

    submitData({text, day, reminder})

    setText('')
    setDay('')
    setReminder(false)

  }

  return (
    <form className='add-form' onSubmit={onSubmitData}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input type="text" name='task' placeholder='Add Task' value = {text} onChange = {(e) => setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label htmlFor="day">Date & Time</label> 
        <input type="text" name='day' placeholder='Add Date and Time' value = {day} onChange = {(e) => setDay(e.target.value)}/>
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="reminder">Reminder</label>
        <input type="checkbox" name='reminder' checked = {reminder} value = {reminder} onChange = {(e) => setReminder(e.currentTarget.checked)}/>
      </div>
      <input type="submit" value='Save Task' className='btn btn-block'/>
    </form>
  )
}

export default AddTask
