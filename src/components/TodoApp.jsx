import AppName from "./AppName";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";

function TodoApp() {
  let todoItems = [
    { name: "React js", dueDate: "04/01/2025" },
    { name: "springboot week 2 and week 3", dueDate: "03/01/2025" },
    { name: "Oops practice and Java concepts revision", dueDate: "31/12/2024" },
    { name: "Mysql practice", dueDate: "31/12/2024" },
  ];
  return (
    <>
      <AppName />
      <AddTodo />
      <TodoItems TodoItems={todoItems} />
    </>
  );
}

export default TodoApp;
