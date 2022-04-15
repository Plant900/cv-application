import React, { Component } from "react"
import uniqid from "uniqid"
import MainInfo from "./MainInfo"
import EduInfo from "./EduInfo"
import WorkInfo from "./WorkInfo"

class MainForm extends Component {
	constructor() {
		super()

		this.state = {
			item: { editing: false, text: "", id: uniqid() },
			items: [],
			mainInfo: [
				{ text: "Name:", id: uniqid(), editing: false },
				{ text: "Email: ", id: uniqid(), editing: false },
				{ text: "Phone number:", id: uniqid(), editing: false },
			],
			eduInfo: [],
			workInfo: [],
		}

		this.toggleEditing = this.toggleEditing.bind(this)
		this.updateItem = this.updateItem.bind(this)
		this.addEduInfo = this.addEduInfo.bind(this)
		this.deleteEduInfo = this.deleteEduInfo.bind(this)
		this.addWorkInfo = this.addWorkInfo.bind(this)
		this.deleteWorkInfo = this.deleteWorkInfo.bind(this)
	}

	updateItem(newText, id, section) {
		if (newText.length > 0) {
			this.setState({
				items: this.state[section].map((item) => {
					if (item.id === id) {
						item.text = newText
						item.editing = false
					}
					return item
				}),
			})
		}
	}

	toggleEditing(id, section) {
		this.setState({
			items: this.state[section].map((item) => {
				if (item.id === id) {
					item.editing = true
				}
				return item
			}),
		})
	}

	addEduInfo(info) {
		this.setState({
			eduInfo: this.state.eduInfo.concat(info),
		})
	}

	deleteEduInfo(id) {
		this.setState({
			eduInfo: this.state.eduInfo.filter((item) => item.id !== id),
		})
	}

	addWorkInfo(info) {
		this.setState({
			workInfo: this.state.workInfo.concat(info),
		})
		console.log(this.state.workInfo)
	}

	deleteWorkInfo(id) {
		this.setState({
			workInfo: this.state.workInfo.filter((item) => item.id !== id),
		})
	}

	render() {
		return (
			<div className="MainForm">
				<h1 className="title">CV Creator</h1>
				<hr className="divider" />
				<MainInfo
					mainInfo={this.state.mainInfo}
					toggleEditing={this.toggleEditing}
					updateItem={this.updateItem}
				/>
				<EduInfo
					eduInfo={this.state.eduInfo}
					addEduInfo={this.addEduInfo}
					deleteEduInfo={this.deleteEduInfo}
				/>
				<WorkInfo
					workInfo={this.state.workInfo}
					addWorkInfo={this.addWorkInfo}
					deleteWorkInfo={this.deleteWorkInfo}
				/>
			</div>
		)
	}
}

export default MainForm
