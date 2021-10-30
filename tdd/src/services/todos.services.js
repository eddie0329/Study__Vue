import axios from "axios";

const getTodos = () => {
  return axios.get('https://jsonplaceholder.typicode.com/todos');
}


export default {
  getTodos
}