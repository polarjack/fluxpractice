import {EventEmitter} from "events";

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
}

const todoStore = new TodoStore;

window.todoStore = todoStore;
export default todoStore;
