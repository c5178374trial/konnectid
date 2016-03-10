import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import MainSection from '../../components/MainSection'
import * as TodoActions from '../../actions'
import ListsView from './lists';

var mockLists = [
  {id: 1, title: "test"},
  {id: 2, title: "test2"}
];

class Lists extends Component {

  render() {
    //const { todos, actions } = this.props
    return (
      <div>
        Lists

        <ul>
        {mockLists.map((list, i) =>
              <ListsView
                key={i}
                id={list.id}
                title={list.title}/>
          )}
        </ul>

      </div>
    )
  }
}

Lists.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
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
)(Lists)
