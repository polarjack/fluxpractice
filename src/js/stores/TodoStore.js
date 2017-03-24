import {EventEmitter} from "events";

import dispacher from "../dispatcher";

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id: 12312314235,
        text: "Go shopping",
        complete: false
      },
      {
        id: 2342365242,
        text: "Pay toodotodotodo",
        complete: false
      },
    ];
  }
  createTodo(text) {
    const id = Date.now();

    this.todos.push({
      id,
      text,
      complete:false,
    });

    this.emit('change');
  }
  getAll() {
    return this.todos;
  }

  handlleActions(action) {
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text);
      }
    }
    // console.log("TodoStore recived and action", action);

  }
}

const todoStore = new TodoStore;
dispacher.register(todoStore.handlleActions.bind(todoStore));
window.dispacher = dispacher;

export default todoStore;
