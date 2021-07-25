import express from "express";

import { getTodos, createTodo, deleteTodo ,starTodo} from "../controllers/todos.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", createTodo);
router.delete("/:id", deleteTodo);
router.patch("/:id/star",starTodo);

export default router;
