import React, { Component } from "react"
import EditField from "./EditField"

// class MainInfo extends Component {
// 	constructor(props) {
// 		super(props)
// 	}

// 	render() {
// 		return <div>{this.props.item}</div>
// 	}
// }

const MainInfo = (props) => {
	return (
		<div className="MainInfoItems">
			{props.mainInfo.map((item) => {
				if (!item.editing) {
					return (
						<li
							className="MainInfoItem"
							id={item.id}
							onClick={() =>
								props.toggleEditing(item.id, "mainInfo")
							}
						>
							{item.text}
						</li>
					)
				} else if (item.editing) {
					return (
						<EditField updateItem={props.updateItem} item={item} />
					)
				}
			})}
		</div>
	)
}

export default MainInfo
