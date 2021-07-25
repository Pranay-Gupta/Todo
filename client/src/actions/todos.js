import * as api from "../api/index.js";

export const getTodos = () => async (dispatch) => {
  try {
    const { data } = await api.getTodos();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createTodo = (todo) => async (dispatch) => {
  try {
    const { data } = await api.createTodo(todo);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await api.deleteTodo(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
 
export const starTodo = (id) => async (dispatch) => {
  try {
    const {data} = await api.starTodo(id);
    dispatch({type : "STAR", payload : data});
  } catch (error) {
    console.log(error.message);
  }
}
