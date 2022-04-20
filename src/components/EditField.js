import React, { Component } from "react"
import { useState, useEffect } from "react"

function EditField(props) {
	const [value, setValue] = useState("")

	let handleChange = (e) => {
		setValue(e.target.value)
	}

	return (
		<div className="EditField">
			<input
				placeholder={props.item.text}
				onChange={handleChange}
				required
			></input>
			<button
				className="EditFieldBtn"
				onClick={() =>
					props.updateItem(value, props.item.id, "mainInfo")
				}
			></button>
		</div>
	)
}

export default EditField

// class EditFieldz extends Component {
// 	constructor(props) {
// 		super(props)

// 		this.state = {
// 			value: "",
// 		}

// 		this.handleChange = this.handleChange.bind(this)
// 	}

// 	handleChange(e) {
// 		this.setState({
// 			value: e.target.value,
// 		})
// 	}

// 	render() {
// 		return (
// 			<div className="EditField">
// 				<input
// 					placeholder={this.props.item.text}
// 					onChange={this.handleChange}
// 					required
// 				></input>
// 				<button
// 					className="EditFieldBtn"
// 					onClick={() =>
// 						this.props.updateItem(
// 							this.state.value,
// 							this.props.item.id,
// 							"mainInfo"
// 						)
// 					}
// 				></button>
// 			</div>
// 		)
// 	}
// }
