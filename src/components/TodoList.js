import React, { Component } from 'react'
import Context from '../context'

class TodoList extends Component {
	renderTodos(todos) {
		return todos.map(function(todo, index) {
			return <p key={index}>{todo}</p>
		})
	}

	render() {
		return (
			<Context.Consumer>
				{({ state }) => this.renderTodos(state.todos)}
			</Context.Consumer>
		)
	}
}

const styles = {
	container: {
		marginTop: 15
	}
}

export default TodoList
