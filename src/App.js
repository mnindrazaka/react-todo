import React, { Component } from 'react'
import './App.css'
import Context from './context'

import Header from './components/Header'
import InputTodo from './components/InputTodo'
import TodoList from './components/TodoList'

class App extends Component {
	state = {
		todos: ['ngoding', 'ngaji', 'merenung']
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
			<Context.Provider
				value={{
					state: this.state,
					addTodo: this.addTodo
				}}>
				<div style={styles.container}>
					<Header title={'Todo List'} />
					<InputTodo />
					<TodoList />
				</div>
			</Context.Provider>
		)
	}
}

const styles = {
	container: {
		textAlign: 'center'
	}
}

export default App
