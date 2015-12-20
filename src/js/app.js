import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './components/TodoApp'
import AppDispatcher from './dispatcher/AppDispatcher'
import TodoStore from './stores/TodoStore'

ReactDOM.render(
  <TodoApp />,
  document.getElementById("app")
);
