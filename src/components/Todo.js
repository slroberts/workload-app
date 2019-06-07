import React from "react";

export default props => (
	<li className="todo-list-item" onClick={props.toggleComplete}>
		<div
			className="list-title"
			style={{ opacity: props.todo.completed ? 0.5 : "" }}>
			{props.todo.input}
		</div>
		<button className="edit" onClick={props.onEdit}>
			edit <i className="far fa-edit" />
		</button>
		<button className="notes">
			notes <i className="far fa-sticky-note" />
		</button>
		<button className="delete" onClick={props.onDelete}>
			delete <i className="far fa-trash-alt" />
		</button>
		<div className="meta">{props.meta}</div>
	</li>
);
