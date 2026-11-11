import Counter from "./components/Counter";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div>
      <h2>useReducer()</h2>

      <Todo />

      <Counter />
    </div>
  );
};

export default App;
