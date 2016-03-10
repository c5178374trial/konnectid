import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import MainSection from '../../components/MainSection'
import * as TodoActions from '../../actions'
import TodoItem from './todoItem';

var mockTodos = [
  {id: 1, title: "t1"},
  {id: 2, title: "t2"}
];

class Todos extends Component {

  render() {
    //const { todos, actions } = this.props
    return (
      <div>
        Todos1

        <ul>
        {mockTodos.map((list, i) =>
              <TodoItem
                key={i}
                id={list.id}
                title={list.title}/>
          )}
        </ul>

      </div>
    )
  }
}

Todos.propTypes = {
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)
