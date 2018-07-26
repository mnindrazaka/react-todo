import React, { Component } from "react"

class TodoList extends Component {
	renderTodos() {
		return this.props.todos.map(function(todo, index) {
			return <p key={index}>{todo}</p>
		})
	}

	render() {
		return (
			<div style={styles.container}>
				<b>List Todos : </b>
				{this.renderTodos()}
			</div>
		)
	}
}

const styles = {
	container: {
		marginTop: 15
	}
}

export default TodoList
