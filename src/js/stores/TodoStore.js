import { Store } from 'flux/utils'
import AppDispatcher from '../dispatcher/AppDispatcher'

class TodoStore extends Store {
  constructor(dispatcher){
    super(dispatcher)
    this.todos = []
  }

  __onDispatch(payload){

    switch (payload.type) {
      case "ADD_TODO":
        this.todos = [...this.todos, payload.todo];
        this.__emitChange();
        break;
      case "REMOVE_TODO":
        this.todos = this.todos.filter((todo) => {
          return todo.id !== payload.todo.id;
        });
        this.__emitChange();
        break;
      default:
    }
  }

  getTodos(){
    return this.todos;
  }
}


const store = new TodoStore(AppDispatcher);

export default store;
