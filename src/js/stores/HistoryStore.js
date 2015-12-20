import { Store } from 'flux/utils'
import AppDispatcher from '../dispatcher/AppDispatcher'

class HistoryStore extends Store {
  constructor(dispatcher){
    super(dispatcher)
    this.histories = []
  }

  __onDispatch(payload){
    switch (payload.type) {
      case "ADD_TODO":
        this.histories = [...this.histories, "ADD:" + payload.todo.text]
        this.__emitChange();
        break;
      case "REMOVE_TODO":
        this.histories = [...this.histories, "REMOVE:" + payload.todo.text]
        this.__emitChange();
        break;
      default:
    }
  }

  getHistories(){
    return this.histories;
  }
}


const store = new HistoryStore(AppDispatcher);

export default store;
