import React, { Component, PropTypes } from 'react'
import { Router, Route, Link } from 'react-router'

export default class TodoItem extends Component {


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

TodoItem.propTypes = {
	post: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired
}

TodoItem.contextTypes = {
	history: PropTypes.object.isRequired,
	muiTheme: PropTypes.object
}

TodoItem.defaultProps = {
	post: {},
	user: {}
}
