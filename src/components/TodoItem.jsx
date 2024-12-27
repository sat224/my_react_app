function TodoItem({ item }) {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">{item.name}</div>
        <div className="col-4">{item.dueDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
