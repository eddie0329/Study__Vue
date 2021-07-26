class UserService {
  #api;

  constructor(api) {
    this.#api = api;
  }

  *getUsers() {
    yield this.#api.get('users/1');
  }
}

const userServiceFactory = (api) => new UserService(api);

export default userServiceFactory;
