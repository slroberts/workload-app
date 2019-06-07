import React from "react";
import "../src/scss/style.scss";
import TodoList from "./components/TodoList";

class App extends React.Component {
	render() {
		return (
			<div className="todo-container">
				<div className="todo-input-container">
					<h1>workload.</h1>
					<p>Stay up-to-date with projects and their statuses.</p>

					<TodoList />
				</div>
			</div>
		);
	}
}

export default App;
