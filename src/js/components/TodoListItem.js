import React from 'react'

class TodoListItem extends React.Component {
  onClick() {
    if (this.props.onClickTodoItem)
      this.props.onClickTodoItem(this.props.todo)
  }

  render () {
    return <li onClick={this.onClick.bind(this)}>{ this.props.todo.text }</li>
  }
}

export default TodoListItem;
