import React, { Component } from "react"
import EditField from "./EditField"

const MainInfo = (props) => {
	return (
		<div className="MainInfoItems">
			{props.mainInfo.map((item, index) => {
				if (!item.editing) {
					return (
						<li
							className={`MainInfoItem ${
								index == 0 ? "MainInfoName" : ""
							}`}
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
