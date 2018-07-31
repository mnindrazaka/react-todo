import React, { Component } from 'react'
import Context from '../context'

class InputTodo extends Component {
	state = {
		inputValue: ''
	}

	changeInputValue = event => {
		const value = event.target.value
		this.setState({
			inputValue: value
		})
	}

	cleanInputValue() {
		this.setState({ inputValue: '' })
	}

	render() {
		return (
			<Context.Consumer>
				{({ addTodo }) => {
					const submitInputValue = () => {
						addTodo(this.state.inputValue)
						this.cleanInputValue()
					}
					return (
						<div>
							<input
								type="text"
								placeholder="what i want todo.."
								value={this.state.inputValue}
								onChange={this.changeInputValue}
							/>
							<button onClick={submitInputValue}>Submit</button>
						</div>
					)
				}}
			</Context.Consumer>
		)
	}
}

export default InputTodo
