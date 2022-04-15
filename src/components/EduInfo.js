import React, { Component } from "react"
import uniqid from "uniqid"

class EduInfo extends Component {
	constructor(props) {
		super(props)

		this.state = {
			info: {
				institutionValue: "",
				startDateValue: "",
				endDateValue: "",
				qualificationValue: "",
			},
			editing: false,
		}

		this.toggleEditing = this.toggleEditing.bind(this)
		this.handleEditSubmit = this.handleEditSubmit.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
	}

	toggleEditing() {
		this.setState({
			editing: !this.state.editing,
		})
	}

	handleInputChange(e) {
		if (e.target.id === "institution") {
			this.setState({
				info: { ...this.state.info, institutionValue: e.target.value },
			})
		}
		if (e.target.id === "startDate") {
			this.setState({
				info: { ...this.state.info, startDateValue: e.target.value },
			})
		}
		if (e.target.id === "endDate") {
			this.setState({
				info: { ...this.state.info, endDateValue: e.target.value },
			})
		}
		if (e.target.id === "qualification") {
			this.setState({
				info: {
					...this.state.info,
					qualificationValue: e.target.value,
				},
			})
		}
	}

	handleEditSubmit(e) {
		e.preventDefault()
		this.props.addEduInfo({ ...this.state.info, id: uniqid() })
		this.setState({
			editing: false,
		})
	}

	render() {
		if (!this.state.editing) {
			return (
				<div className="infoSection">
					<div className="infoHeader">
						<h2>Educational Experience</h2>{" "}
						<button
							className="addItemButton"
							onClick={this.toggleEditing}
						>
							+
						</button>
					</div>

					<div className="EduInfoCards">
						{this.props.eduInfo.map((item) => {
							return (
								<div className="EduInfoCard">
									<span
										className="eduDeleteBtn"
										onClick={() =>
											this.props.deleteEduInfo(item.id)
										}
									></span>
									<div>
										Institution: {item.institutionValue}
									</div>
									<div>Start date: {item.startDateValue}</div>
									<div>End date: {item.endDateValue}</div>
									<div>
										{" "}
										Qualification: {
											item.qualificationValue
										}{" "}
									</div>
								</div>
							)
						})}
					</div>
				</div>
			)
		}
		if (this.state.editing) {
			return (
				<form
					className="EduInfoEditing"
					onSubmit={this.handleEditSubmit}
				>
					<label htmlFor="institution">Institution</label>
					<input
						type="text"
						id="institution"
						onChange={this.handleInputChange}
						required
					/>
					<label htmlFor="startDate">Start date</label>
					<input
						type="date"
						id="startDate"
						onChange={this.handleInputChange}
						required
					/>
					<label htmlFor="endDate">End date</label>
					<input
						type="date"
						id="endDate"
						onChange={this.handleInputChange}
						required
					/>
					<label htmlFor="qualification">Qualification</label>
					<input
						type="text"
						id="qualification"
						onChange={this.handleInputChange}
						required
					/>

					<button type="submit">Submit</button>
					<button onClick={this.toggleEditing}>Cancel</button>
				</form>
			)
		}
	}
}

export default EduInfo
