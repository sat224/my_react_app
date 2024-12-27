import TodoItem from "./TodoItem";

function TodoItems({ TodoItems }) {
  return (
    <>
      {TodoItems.map((item) => (
        <TodoItem key={item.name} item={item} />
      ))}
    </>
  );
}

export default TodoItems;
