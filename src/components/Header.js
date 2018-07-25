import React, { Component } from "react"

class Header extends Component {
	render() {
		return (
			<div>
				<h1 style={styles.headerTitle}>{this.props.title}</h1>
			</div>
		)
	}
}

const styles = {
	headerTitle: {
		color: "red"
	}
}

export default Header
