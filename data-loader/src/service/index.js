import axios from "axios";
import todoServiceFactory from './TodoService';
import userServiceFactory from "./UserService";

class Api {
  #axios

  constructor(baseURL) {
    this.#axios = axios.create({ baseURL });
  }

  #responseHandler = (promise) => new Promise((resolve, reject) => {
    promise
      .then(res => {
        resolve(res.data);
      })
      .catch(e => {
        reject(e);
      });
  });

  get(path, params, config) {
    return this.#responseHandler(this.#axios.get(path, { ...config, params }));
  }
}

const commonApi = new Api('https://jsonplaceholder.typicode.com/');

const todoService = todoServiceFactory(commonApi);
const userService = userServiceFactory(commonApi);

export default {
  install(Vue) {
    Vue.prototype.$services = {
      todo: todoService,
      user: userService
    };
  },
}
