const express = require("express");

const {
  getAllTodos,
  getTodoById,
  createTodo,
  toggleTodoCompleted,
  deleteTodoById,
} = require("./todo.service");

const router = express.Router();

const ROUTE_PREFIX = "todo";

async function getAllTodosHandler(req, res) {
  const todos = await getAllTodos();
  res.json(todos);
}

async function getTodoByIdHandler(req, res) {
  const { id } = req.params;
  const todo = await getTodoById(id);
  res.json(todo);
}

async function createTodoHandler(req, res) {
  const { title } = req.body;
  const todo = await createTodo({
    title,
  });

  res.json(todo);
}

async function toggleTodoCompletedHandler(req, res) {
  const { id } = req.params;
  const todo = await toggleTodoCompleted(id);
  res.json(todo);
}

async function deleteTodoByIdHandler(req, res) {
  const { id } = req.params;
  const todo = await deleteTodoById(id);
  res.json(todo);
}

router.get(`/${ROUTE_PREFIX}`, getAllTodosHandler);
router.get(`/${ROUTE_PREFIX}/:id`, getTodoByIdHandler);
router.post(`/${ROUTE_PREFIX}`, createTodoHandler);
router.put(`/${ROUTE_PREFIX}/:id`, toggleTodoCompletedHandler);
router.delete(`/${ROUTE_PREFIX}/:id`, deleteTodoByIdHandler);

module.exports = router;