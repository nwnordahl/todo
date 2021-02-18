import Todo from "./Todo";

export default function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todo={todo}
            todos={todos}
            key={todo.id}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
}
