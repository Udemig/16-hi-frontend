import { useEffect, useState } from "react";
import ListItem from "./components/ListItem";
import TodoForm from "./components/TodoForm";
import api from "./api";

const App = () => {
  // api yanıtının state'i
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [todos, setTodos] = useState(null);

  // bileşenin ekrana basılma anını izle
  useEffect(() => {
    setIsLoading(true);

    const params = { _sort: "date", _order: "desc" };

    api
      .get("/todos", { params })
      .then((res) => setTodos(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  // sil
  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  // yeniTodo'yu state'e ekleyen fonksiyon
  const addTodo = (newTodo) => {
    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="bg-dark text-light min-vh-100 p-5">
      <header>
        <h1>TODO APP</h1>
        <p>Pratik için basit CRUD uygulaması</p>
      </header>

      <TodoForm addTodo={addTodo} />

      <div className="d-flex flex-column gap-5 mt-5">
        {isLoading ? (
          <h1>Yükleniyor..</h1>
        ) : error ? (
          <h1>Hata!</h1>
        ) : (
          todos.map((todo) => <ListItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />)
        )}
      </div>
    </div>
  );
};

export default App;
