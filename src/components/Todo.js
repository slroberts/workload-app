import React from "react";
import TodoStatus from "./TodoStatus";

export default class Todo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			meta: Date(),
			isEditing: false
		};
	}

	componentDidMount() {
		this.setState({
			changedTodoText: this.props.todo.input
		});
	}

	handleEdit = event => {
		this.props.todo.input = this.setState({
			isEditing: true,
			changedTodoText: this.props.todo.input
		});
	};

	handleEditUpdate = event => {
		this.setState({
			isEditing: false
		});
	};

	handleSaveChange = event => {
		let _changedTodoText = event.target.value;
		this.setState({
			changedTodoText: _changedTodoText
		});
	};

	render() {
		let viewStyle = [];
		let editStyle = [];

		this.state.isEditing
			? (viewStyle.display = "none")
			: (editStyle.display = "none");

		return (
			<li className="todo-list-item">
				<div
					className="list-title"
					onClick={this.props.toggleComplete}
					// style={{ opacity: this.props.todo.completed ? 0.5 : "" }}
					style={viewStyle}>
					{this.state.changedTodoText}
				</div>

				<input
					className="is-editing"
					style={editStyle}
					value={this.state.changedTodoText}
					onChange={this.handleSaveChange}
				/>

				{this.state.isEditing === false ? (
					<button className="edit" onClick={this.handleEdit}>
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

// export default props => (
// 	<li className="todo-list-item">
// 		<div
// 			className="list-title"
// 			onClick={props.toggleComplete}
// 			// style={{ opacity: props.todo.completed ? 0.5 : "" }}
// 			style={props.viewStyle}>
// 			{props.todo.input}
// 		</div>

// 		<input style={props.editStyle} value={props.todo.input} />

// 		<button className="edit" onClick={props.onEdit}>
// 			edit <i className="far fa-edit" />
// 		</button>
// 		<button className="notes">
// 			notes <i className="far fa-sticky-note" />
// 		</button>
// 		<button className="delete" onClick={props.onDelete}>
// 			delete <i className="far fa-trash-alt" />
// 		</button>
// 		<div className="meta">{props.meta}</div>

// 		<TodoStatus />
// 	</li>
// );
