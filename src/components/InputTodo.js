import React, { Component } from "react"
import { Button } from "reactstrap"

class InputTodo extends Component {
	state = {
		inputValue: ""
	}

	onChange = event => {
		const value = event.target.value
		this.setState({
			inputValue: value
		})
	}

	onSubmit = () => {
		alert(this.state.inputValue)
	}

	render() {
		console.log("state inputTodo : ", this.state)

		return (
			<div>
				<Card />

				<input
					type="text"
					placeholder="what i want todo.."
					value={this.state.inputValue}
					onChange={this.onChange}
				/>
				<button onClick={this.onSubmit}>Submit</button>
			</div>
		)
	}
}

export default InputTodo
