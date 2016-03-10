import React, { PropTypes, Component } from 'react'
import TodoTextInput from './TodoTextInput'
import { Router, Route, Link } from 'react-router'

class Header extends Component {
  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <header>
          <h1>Welcome</h1>
          <Link to={'/lists'}>Start</Link>
          
      </header>
    )
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header
