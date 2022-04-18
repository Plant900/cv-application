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
				isOngoing: false,
				qualificationValue: "",
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
						<h2>Educational Experience</h2>{" "}
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

					<div className="EduInfoCards">
						{this.props.eduInfo.map((item) => {
							return (
								<div className="EduInfoCard">
									{this.props.isPreviewing ? (
										""
									) : (
										<span
											className="eduDeleteBtn"
											onClick={() =>
												this.props.deleteEduInfo(
													item.id
												)
											}
										></span>
									)}

									<h3 className="EduInfoCardTitle">
										{item.institutionValue}
									</h3>
									<div>
										{item.startDateValue} to{" "}
										{item.endDateValue}
									</div>

									<div>{item.qualificationValue}</div>
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
					<div className="EduInfoDates">
						<label htmlFor="startDate">From</label>
						<input
							type="date"
							id="startDate"
							onChange={this.handleInputChange}
							required
						/>
						{!this.state.info.isOngoing ? (
							<div>
								<label htmlFor="endDate"> To </label>
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
