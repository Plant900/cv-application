import React, { Component } from "react"
import uniqid from "uniqid"

class WorkInfo extends Component {
	constructor(props) {
		super(props)

		this.state = {
			info: {
				companyValue: "",
				jobTitleValue: "",
				startDateValue: "",
				endDateValue: "",
				isOngoing: false,
				descriptionValue: "",
			},
			editing: false,
		}

		this.toggleEditing = this.toggleEditing.bind(this)
		this.handleEditSubmit = this.handleEditSubmit.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
		this.toggleOngoing = this.toggleOngoing.bind(this)
	}

	toggleEditing() {
		this.setState({
			editing: !this.state.editing,
		})
	}

	handleEditSubmit(e) {
		e.preventDefault()
		this.props.addWorkInfo({ ...this.state.info, id: uniqid() })
		this.setState({
			editing: false,
		})
	}

	handleInputChange(e) {
		if (e.target.id === "company") {
			this.setState({
				info: { ...this.state.info, companyValue: e.target.value },
			})
		}
		if (e.target.id === "jobTitle") {
			this.setState({
				info: { ...this.state.info, jobTitleValue: e.target.value },
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
		if (e.target.id === "description") {
			this.setState({
				info: {
					...this.state.info,
					descriptionValue: e.target.value,
				},
			})
		}
	}

	toggleOngoing() {
		this.setState({
			info: {
				...this.state.info,
				endDateValue: "Present",
				isOngoing: !this.state.info.isOngoing,
			},
		})
	}

	render() {
		if (!this.state.editing) {
			return (
				<div className="infoSection">
					<div className="infoHeader">
						<h2>Work Experience</h2>
						{this.props.isPreviewing ? (
							""
						) : (
							<button
								className="addItemButton"
								onClick={this.toggleEditing}
							>
								+
							</button>
						)}
					</div>
					<div className="WorkInfoCards">
						{this.props.workInfo.map((item) => {
							return (
								<div className="WorkInfoCard">
									{this.props.isPreviewing ? (
										""
									) : (
										<span
											className="workDeleteBtn"
											onClick={() =>
												this.props.deleteWorkInfo(
													item.id
												)
											}
										></span>
									)}

									<h3 className="WorkInfoJobTitle">
										{item.jobTitleValue} at{" "}
										{item.companyValue}
									</h3>
									<div>
										{item.startDateValue} to{" "}
										{item.endDateValue}
									</div>
									<div> {item.descriptionValue} </div>
								</div>
							)
						})}
					</div>
				</div>
			)
		} else if (this.state.editing) {
			return (
				<form
					className="WorkInfoEditing"
					onSubmit={this.handleEditSubmit}
				>
					<label htmlFor="company">Company</label>
					<input
						type="text"
						id="company"
						onChange={this.handleInputChange}
						required
					/>
					<label htmlFor="jobTitle">Job</label>
					<input
						type="text"
						id="jobTitle"
						onChange={this.handleInputChange}
						required
					/>
					<div className="WorkInfoDates">
						<label htmlFor="startDate">Start Date</label>
						<input
							type="date"
							id="startDate"
							onChange={this.handleInputChange}
							required
						/>
						{!this.state.info.isOngoing ? (
							<div>
								<label htmlFor="endDate">End Date</label>
								<input
									type="date"
									id="endDate"
									onChange={this.handleInputChange}
									required
								/>
							</div>
						) : (
							""
						)}
						<button
							onClick={this.toggleOngoing}
							className={`isOngoingBtn ${
								this.state.info.isOngoing
									? "ongoingTrue"
									: "ongoingFalse"
							}`}
						>
							Present
						</button>
					</div>

					<label htmlFor="description">Description</label>
					<input
						type="text"
						id="description"
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

export default WorkInfo
