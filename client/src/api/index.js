import axios from 'axios';
const url = "http://localhost:8080/todos";

export const getTodos = ()=> axios.get(url);
export const createTodo = (newTodo) => axios.post(url,newTodo);
export const deleteTodo = (id) => axios.delete(`${url}/${id}`);
export const starTodo = (id) => axios.patch(`${url}/${id}/star`);
