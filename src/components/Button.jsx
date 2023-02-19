import React from 'react'
import PropTypes from 'prop-types'


const Button = ({text, color, onclick}) => {
    return <button onClick = {onclick} style={{backgroundColor : color}} className='btn'>{text}</button>
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onclick: PropTypes.func,
}

Button.defaultProps = {
    text : 'Add',
    color : 'green'
}

export default Button
