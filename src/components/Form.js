export default function Form({
  inputText,
  setInputText,
  todos,
  setTodos,
  setStatus,
}) {
  function inputTextHandler(e) {
    setInputText(e.target.value);
  }

  function submitTodoHandler(e) {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: Date.now() }]);
    setInputText("");
  }

  function statusHandler(e) {
    setStatus(e.target.value);
  }

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        className="todo-input"
        type="text"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
