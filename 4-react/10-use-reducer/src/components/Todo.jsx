import { useReducer } from "react";
import { initialState, todoReducer } from "../reducers/todoReducer";

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state.todos);

  // form gönderilince
  const handleSubmit = (e) => {
    // yenilemeyi engellle
    e.preventDefault();

    // inputtaki yazıya eriş
    const text = e.target[0].value.trim();

    // reducer'a haber ver
    dispatch({ type: "EKLE", payload: text });

    // formu sıfırla
    e.target.reset();
  };

  return (
    <div className="todo-list">
      <h1>Todo-List</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="todo yazınız..." />
        <button>Gönder</button>
      </form>

      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>

            <button onClick={() => dispatch({ type: "SİL", payload: todo.id })}>sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
