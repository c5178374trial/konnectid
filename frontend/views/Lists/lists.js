import React, { Component, PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'

export default class ListsItem extends Component {
  

  getStyles() {
    return {
      card: {
        position: 'relative',
        marginTop: 10,
        marginBottom: 20
      },
      iconMenu: {
        position: 'absolute',
        top: 12,
        right: 16,
        zIndex: 5
      }
    };
  }

//            <h2>{id}: {title}</h2>

    render() {
    const { history } = this.context;
    const { id, title } = this.props;
    const styles = this.getStyles();

    
    return (
        <li>
            <Link to={`/list/${id}`}>{title}</Link>
        </li>
    );
  }
}

ListsItem.propTypes = {
    actions: PropTypes.shape({
      editPost: PropTypes.func,
      removePost: PropTypes.func
    }).isRequired,
    post: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  }

ListsItem.contextTypes = {
    history: PropTypes.object.isRequired,
    muiTheme: PropTypes.object
  }

 ListsItem.defaultProps = {
    post: {},
    user: {}
  }
