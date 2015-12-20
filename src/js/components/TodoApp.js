import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import HistoryList from './HistoryList'

import AppDispatcher from '../dispatcher/AppDispatcher'
import TodoStore from '../stores/TodoStore'

class TodoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Awesome Todo",
      todos: TodoStore.getTodos()
    }
  }

  componentDidMount() {
    this.todoStoreToken = TodoStore.addListener(
      this.onStoreUpdate.bind(this)
    )
  }

  componentWillUnmount() {
    this.todoStoreToken.remove();
  }

  onStoreUpdate() {
    this.setState({
      todos: TodoStore.getTodos()
    })
  }


  render() {
    return (
      <div className="container">
        <div className="row">

          { /* Todo List */}
          <div className="col-xs-4">
            <TodoInput />
            <TodoList todos={ this.state.todos } />
          </div>

          { /* History List */}
          <div className="col-xs-4">
            <HistoryList />
          </div>

        </div>
      </div>
    );
  }
}

export default TodoApp
