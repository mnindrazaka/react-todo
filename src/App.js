import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

import Header from "./components/Header"
import InputTodo from "./components/InputTodo"

class App extends Component {
	render() {
		return (
			<div style={styles.container}>
				<Header title={"Todo List"} />
				<InputTodo />
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
