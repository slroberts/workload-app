import React from "react";
import TodoStatus from "./TodoStatus";

export default class Todo extends React.Component {
	state = {
		meta: Date(),
		isInEditMode: false
	};

	componentDidMount() {
		this.setState({
			changedTodoText: this.props.todo.input
		});
	}

	changeEditMode = () => {
		this.setState({
			isInEditMode: !this.state.isInEditMode
		});
	};

	handleEditUpdate = () => {
		this.setState({
			isInEditMode: false,
			changedTodoText: this.refs.newTextInput.value
		});
	};

	editViewMode = () => {
		return (
			<input
				className="is-editing"
				defaultValue={this.state.changedTodoText}
				ref="newTextInput"
			/>
		);
	};

	defaultViewMode = () => {
		return (
			<div
				className="list-title"
				onClick={this.props.toggleComplete}
				style={{ opacity: this.props.todo.completed ? 0.5 : "" }}>
				{this.state.changedTodoText}
			</div>
		);
	};

	render() {
		return (
			<li className="todo-list-item">
				{this.state.isInEditMode ? this.editViewMode() : this.defaultViewMode()}

				{this.state.isInEditMode === false ? (
					<button className="edit" onClick={this.changeEditMode}>
						edit <i className="far fa-edit" />
					</button>
				) : (
					<button className="save" onClick={this.handleEditUpdate}>
						save <i className="far fa-save" />
					</button>
				)}
				<button className="notes">
					notes <i className="far fa-sticky-note" />
				</button>
				<button className="delete" onClick={this.props.onDelete}>
					delete <i className="far fa-trash-alt" />
				</button>
				<div className="meta">{this.state.meta}</div>

				<TodoStatus />
			</li>
		);
	}
}
