import React, { Component } from "react"

// const EditField = (props) => {
// 	return (
// 		<>
// 			<input placeholder={props.item.text}></input>
// 			<button
// 				onClick={() =>
// 					props.updateItem("maggot", props.item.id, "mainInfo")
// 				}
// 			></button>
// 		</>
// 	)
// }

class EditField extends Component {
	constructor(props) {
		super(props)

		this.state = {
			value: "",
		}

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		this.setState({
			value: e.target.value,
		})
	}

	render() {
		return (
			<>
				<input
					placeholder={this.props.item.text}
					onChange={this.handleChange}
					required
				></input>
				<button
					onClick={() =>
						this.props.updateItem(
							this.state.value,
							this.props.item.id,
							"mainInfo"
						)
					}
				>
					Submit
				</button>
			</>
		)
	}
}

export default EditField
