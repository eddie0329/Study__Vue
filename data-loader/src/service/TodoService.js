class TodoService {
  #api;

  constructor(api) {
    this.#api = api;
  }

  getTodos(){
    return this.#api.get('todos/1');
  }
}

const todoServiceFactory = (api) => new TodoService(api);

export default todoServiceFactory;
