import React from "react";
import shortid from "shortid";

export default class TodoForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			placeholder: "ex. Company UI design",
			input: ""
		};
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();

		if (!this.state.input.length) {
			return;
		}

		this.props.onSubmit({
			id: shortid.generate(),
			input: this.state.input,
			completed: false
		});

		this.setState({
			input: ""
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					className="todo-input"
					name="input"
					placeholder={this.state.placeholder}
					value={this.state.input}
					onChange={this.handleChange}
				/>
				<button
					className="todo-button"
					name="button"
					onClick={this.handleSubmit}>
					Add to Queue
				</button>
			</form>
		);
	}
}
