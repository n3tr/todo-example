import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import HistoryList from './HistoryList'

class TodoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Awesome Todo",
      todos: [
        {
          id: 1,
          text: "My Todo 1"
        },
        {
          id: 2,
          text: "My Todo 2"
        }
      ],
      histories: []
    }
  }

  onSubmitTodo(text) {
    let todo = {
      id: Date.now(),
      text: text
    }

    this.setState({
      todos: [...this.state.todos, todo],
      histories: [...this.state.histories, "add: " + text]
    });
  }

  removeTodo(todo) {
    let todos = this.state.todos.filter((_todo) => {
      return todo.id !== _todo.id;
    });

    this.setState({
      todos: todos,
      histories: [...this.state.histories, "delete: " + todo.text]
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">

          { /* Todo List */}
          <div className="col-xs-4">
            <TodoInput onSubmitTodo={ this.onSubmitTodo.bind(this) }  />
            <TodoList
              todos={ this.state.todos }
              onClickTodoItem={this.removeTodo.bind(this)} />
          </div>

          { /* History List */}
          <div className="col-xs-4">
            <HistoryList histories={this.state.histories} />
          </div>

        </div>
      </div>
    );
  }
}

export default TodoApp
