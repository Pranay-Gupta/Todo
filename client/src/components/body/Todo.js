import React, { useEffect, useState } from "react";
import "./Todo.css";
import DeleteIcon from "@material-ui/icons/Delete";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import IconButton from "@material-ui/core/IconButton";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import { deleteTodo, starTodo } from "../../actions/todos";
import { useDispatch } from "react-redux";
import StarIcon from "@material-ui/icons/Star";
import Tooltip from "@material-ui/core/Tooltip";
function Todo({ todo, title }) {
  const dispatch = useDispatch();
  const [star, setStar] = useState(todo.starred);
  useEffect(() => {
    setStar(todo.starred);
  }, [todo.starred, dispatch]);

  return (
    <div className="todo">
      <div className="todo__title">
        <Tooltip title="Mark Completed">
          <IconButton>
            <RadioButtonUncheckedIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <p>{title}</p>
      </div>

      <div className="todo__rightSection">
        <Tooltip title={star ? "Starred" : "Not Starred"}>
          <IconButton onClick={() => dispatch(starTodo(todo._id))}>
            {star ? (
              <StarIcon color="primary" fontSize="small" />
            ) : (
              <StarOutlineIcon fontSize="small" />
            )}
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton
            className="todo__rightSection__delete"
            onClick={() => dispatch(deleteTodo(todo._id))}
          >
            <DeleteIcon frontSize="small" />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}

export default Todo;
