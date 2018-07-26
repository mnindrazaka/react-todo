import React, { Component } from "react"

class InputTodo extends Component {
	state = {
		inputValue: ""
	}

	changeInputValue = event => {
		const value = event.target.value
		this.setState({
			inputValue: value
		})
	}

	submitInputValue = () => {
		this.props.onSubmit(this.state.inputValue)
		this.cleanInputValue()
	}

	cleanInputValue() {
		this.setState({ inputValue: "" })
	}

	render() {
		return (
			<div>
				<input
					type="text"
					placeholder="what i want todo.."
					value={this.state.inputValue}
					onChange={this.changeInputValue}
				/>
				<button onClick={this.submitInputValue}>Submit</button>
			</div>
		)
	}
}

export default InputTodo
