import React from 'react'
import TodoListItem from './TodoListItem'

class TodoList extends React.Component {

  onClickTodoItem(todo) {
    this.props.onClickTodoItem(todo)
  }

  render() {
    var todoEls = this.props.todos.map( (todo, i) => {
      return <TodoListItem
        onClickTodoItem={this.onClickTodoItem.bind(this)}
        todo={todo}
        key={i}/>;
    });

    return (
      <ul>
        { todoEls }
      </ul>
    )
  }
}

export default TodoList
