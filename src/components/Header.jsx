import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title, onClick, showAddTasks}) => {

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button text = {showAddTasks? 'Close' : 'Add New Task'} color = {showAddTasks? 'red' : 'green'} onclick = {onClick}/>
    </header>
  )
}

Header.defaultProps = {
    title : 'Task Tracker',
}

Header.propTypes = {
    title : PropTypes.string,
}

export default Header
