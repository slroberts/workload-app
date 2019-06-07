import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default class TodoList extends React.Component {
	state = {
		todos: [],
		todoToShow: "all",
		toggleAllComplete: true,
		meta: Date()
	};

	componentDidMount() {
		this.hydrateStateWithLocalStorage();

		// add event listener to save state to localStorage
		// when user leaves/refreshes the page
		window.addEventListener(
			"beforeunload",
			this.saveStateToLocalStorage.bind(this)
		);
	}

	componentWillUnmount() {
		window.removeEventListener(
			"beforeunload",
			this.saveStateToLocalStorage.bind(this)
		);

		// saves if component has a chance to unmount
		this.saveStateToLocalStorage();
	}

	hydrateStateWithLocalStorage() {
		// for all items in state
		for (let key in this.state) {
			// if the key exists in localStorage
			if (localStorage.hasOwnProperty(key)) {
				// get the key's value from localStorage
				let value = localStorage.getItem(key);

				// parse the localStorage string and setState
				try {
					value = JSON.parse(value);
					this.setState({ [key]: value });
				} catch (e) {
					// handle empty string
					this.setState({ [key]: value });
				}
			}
		}
	}

	saveStateToLocalStorage() {
		// for every item in React state
		for (let key in this.state) {
			// save to localStorage
			localStorage.setItem(key, JSON.stringify(this.state[key]));
		}
	}

	addTodo = todo => {
		this.setState(state => ({
			todos: [todo, ...state.todos]
		}));
	};

	toggleComplete = id => {
		this.setState(state => ({
			todos: state.todos.map(todo => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed
					};
				} else {
					return todo;
				}
			})
		}));
	};

	updateTodoToShow = s => {
		this.setState({
			todoToShow: s
		});
	};

	handleDelete = id => {
		this.setState(state => ({
			todos: state.todos.filter(todo => todo.id !== id)
		}));
	};

	// handleEdit = todo => {
	// 	this.setState(state => ({
	// 		input: state.input.filter()
	// 	}));
	// };

	removeAllComplete = () => {
		this.setState(state => ({
			todos: state.todos.filter(todo => !todo.completed)
		}));
	};

	toggleAllComplete = () => {
		this.setState(state => ({
			todos: state.todos.map(todo => ({
				...todo,
				completed: state.toggleAllComplete
			})),
			toggleAllComplete: !state.toggleAllComplete
		}));
	};

	render() {
		let todos = [];

		if (this.state.todoToShow === "all") {
			todos = this.state.todos;
		} else if (this.state.todoToShow === "active") {
			todos = this.state.todos.filter(todo => !todo.completed);
		} else if (this.state.todoToShow === "completed") {
			todos = this.state.todos.filter(todo => todo.completed);
		}

		return (
			<div>
				<TodoForm onSubmit={this.addTodo} />
				<ul className="todo-list-container">
					{todos.map(todo => (
						<Todo
							key={todo.id}
							toggleComplete={() => this.toggleComplete(todo.id)}
							onDelete={() => this.handleDelete(todo.id)}
							onEdit={() => this.handleEdit(todo.id)}
							todo={todo}
							meta={this.state.meta}
						/>
					))}
				</ul>
				{this.state.todos.some(todo => todo) ? (
					<div className="notifications">
						<div className="todo-counter">
							Todos left:{" "}
							{this.state.todos.filter(todo => !todo.completed).length}
						</div>
						<div className="filters">
							<button onClick={() => this.updateTodoToShow("all")}>All</button>
							<button onClick={() => this.updateTodoToShow("active")}>
								Active
							</button>
							<button onClick={() => this.updateTodoToShow("completed")}>
								Completed
							</button>
							{/* <button onClick={this.toggleAllComplete}>
								Toggle All: {`${this.state.toggleAllComplete}`}
							</button> */}
							{this.state.todos.some(todo => todo.completed) ? (
								<button onClick={this.removeAllComplete}>
									Remove All Completed Items
								</button>
							) : null}
						</div>
					</div>
				) : null}
			</div>
		);
	}
}
