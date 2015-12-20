import React from 'react'
import AppDispatcher from '../dispatcher/AppDispatcher'

class TodoInput extends React.Component {
  onFormSubmit(e) {
    e.preventDefault()
    let text = this.refs.todoInput.value;
    this.refs.todoInput.value = '';
    let todo = {
      id: Date.now(),
      text: text
    }

    AppDispatcher.dispatch({
      type: 'ADD_TODO',
      todo: todo
    })
  }

  render() {
    return (
      <form onSubmit={ this.onFormSubmit.bind(this) }>
        <input type="text" ref="todoInput"/>
      </form>
    );
  }
}

export default TodoInput
