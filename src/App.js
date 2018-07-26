import React, { Component } from "react"
import "./App.css"

import Header from "./components/Header"
import InputTodo from "./components/InputTodo"
import TodoList from "./components/TodoList"

class App extends Component {
	state = {
		todos: ["ngoding", "ngaji", "merenung"]
	}

	addTodo = todo => {
		const todos = this.state.todos
		todos.push(todo)
		this.setState({
			todos: todos
		})
	}

	render() {
		return (
			<div style={styles.container}>
				<Header title={"Todo List"} />
				<InputTodo onSubmit={this.addTodo} />
				<TodoList todos={this.state.todos} />
			</div>
		)
	}
}

const styles = {
	container: {
		textAlign: "center"
	}
}

export default App
