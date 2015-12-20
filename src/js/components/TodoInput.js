import React from 'react'

class TodoInput extends React.Component {
  onFormSubmit(e) {
    e.preventDefault()
    let text = this.refs.todoInput.value;
    this.refs.todoInput.value = '';
    this.props.onSubmitTodo(text)
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
