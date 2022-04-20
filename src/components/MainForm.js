import React, { Component } from "react"
import { useState, useEffect } from "react"
import uniqid from "uniqid"
import MainInfo from "./MainInfo"
import EduInfo from "./EduInfo"
import WorkInfo from "./WorkInfo"

function MainForm() {
	const [mainInfo, setMainInfo] = useState([
		{ text: "Name:", id: uniqid(), editing: false },
		{ text: "Email: ", id: uniqid(), editing: false },
		{ text: "Phone number:", id: uniqid(), editing: false },
	])
	const [eduInfo, setEduInfo] = useState([])
	const [workInfo, setWorkInfo] = useState([])
	const [isPreviewing, setIsPreviewing] = useState(false)

	let updateItem = (newText, id, section) => {
		if (newText.length > 0) {
			setMainInfo(
				mainInfo.map((item) => {
					if (item.id === id) {
						item.text = newText
						item.editing = false
					}
					return item
				})
			)
		}
	}

	let toggleEditing = (id, section) => {
		setMainInfo(
			mainInfo.map((item) => {
				if (item.id === id) {
					item.editing = true
				}
				return item
			})
		)
	}

	let addEduInfo = (info) => {
		setEduInfo(eduInfo.concat(info))
	}

	let deleteEduInfo = (id) => {
		setEduInfo(eduInfo.filter((item) => item.id !== id))
	}

	let addWorkInfo = (info) => {
		setWorkInfo(workInfo.concat(info))
	}

	let deleteWorkInfo = (id) => {
		setWorkInfo(workInfo.filter((item) => item.id !== id))
	}

	let togglePreview = () => {
		setIsPreviewing(!isPreviewing)
	}

	return (
		<div>
			<h1 className="title">CV Creator</h1>
			<hr className="divider" />
			<div className="viewButtonContainer">
				<button onClick={togglePreview} className="viewButton">
					Toggle Edit
				</button>
			</div>
			<div className="MainForm">
				<MainInfo
					mainInfo={mainInfo}
					toggleEditing={toggleEditing}
					updateItem={updateItem}
				/>
				<EduInfo
					eduInfo={eduInfo}
					isPreviewing={isPreviewing}
					addEduInfo={addEduInfo}
					deleteEduInfo={deleteEduInfo}
				/>
				<WorkInfo
					workInfo={workInfo}
					isPreviewing={isPreviewing}
					addWorkInfo={addWorkInfo}
					deleteWorkInfo={deleteWorkInfo}
				/>
			</div>
		</div>
	)
}

export default MainForm

class MainFormz extends Component {
	constructor() {
		super()

		this.state = {
			mainInfo: [
				{ text: "Name:", id: uniqid(), editing: false },
				{ text: "Email: ", id: uniqid(), editing: false },
				{ text: "Phone number:", id: uniqid(), editing: false },
			],
			eduInfo: [],
			workInfo: [],
			isPreviewing: false,
		}

		this.toggleEditing = this.toggleEditing.bind(this)
		this.updateItem = this.updateItem.bind(this)
		this.addEduInfo = this.addEduInfo.bind(this)
		this.deleteEduInfo = this.deleteEduInfo.bind(this)
		this.addWorkInfo = this.addWorkInfo.bind(this)
		this.deleteWorkInfo = this.deleteWorkInfo.bind(this)
		this.togglePreview = this.togglePreview.bind(this)
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

	togglePreview() {
		this.setState({
			isPreviewing: !this.state.isPreviewing,
		})
	}

	render() {
		return (
			<div>
				<h1 className="title">CV Creator</h1>
				<hr className="divider" />
				<div className="viewButtonContainer">
					<button onClick={this.togglePreview} className="viewButton">
						Toggle Edit
					</button>
				</div>
				<div className="MainForm">
					<MainInfo
						mainInfo={this.state.mainInfo}
						toggleEditing={this.toggleEditing}
						updateItem={this.updateItem}
					/>
					<EduInfo
						eduInfo={this.state.eduInfo}
						isPreviewing={this.state.isPreviewing}
						addEduInfo={this.addEduInfo}
						deleteEduInfo={this.deleteEduInfo}
					/>
					<WorkInfo
						workInfo={this.state.workInfo}
						isPreviewing={this.state.isPreviewing}
						addWorkInfo={this.addWorkInfo}
						deleteWorkInfo={this.deleteWorkInfo}
					/>
				</div>
			</div>
		)
	}
}
