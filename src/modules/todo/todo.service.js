const { Todo } = require("../../models");

async function getAllTodos() {
  return Todo.findAll();
}

async function getTodoById(id) {
  return Todo.findByPk(id);
}

async function createTodo({ title }) {
  return Todo.create({ title });
}

async function toggleTodoCompleted(id) {
  return Todo.update(
    {
      completed: true,
    },
    {
      where: {
        id: id,
      },
    }
  );
}

async function deleteTodoById(id) {
  return Todo.destroy({
    where: {
      id: id,
    },
  });
}

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  toggleTodoCompleted,
  deleteTodoById,
};
