import React from "react";
import shortid from "shortid";

export default class TodoStatus extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			status: "queued",
			id: shortid.generate()
		};
	}

	handleStatus = event => {
		this.setState({
			status: event.target.value
		});
	};

	render() {
		return (
			<ul className="todo-status-container">
				<li className="todo-status-item">
					<span>
						<input
							className="todo-status-input"
							type="radio"
							onChange={this.handleStatus}
							checked={this.state.status === "completed"}
							value="completed"
						/>
						Completed
					</span>
					<span>
						<input
							className="todo-status-input"
							type="radio"
							onChange={this.handleStatus}
							checked={this.state.status === "active"}
							value="active"
						/>
						Active
					</span>
					<span>
						<input
							className="todo-status-input"
							type="radio"
							onChange={this.handleStatus}
							checked={this.state.status === "queued"}
							value="queued"
						/>
						Queued
					</span>
				</li>
			</ul>
		);
	}
}
