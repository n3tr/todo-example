import React from 'react'
import TodoListItem from './TodoListItem'
import AppDispatcher from '../dispatcher/AppDispatcher'

class TodoList extends React.Component {

  onClickTodoItem(todo) {
    AppDispatcher.dispatch({
      type: 'REMOVE_TODO',
      todo: todo
    })
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
