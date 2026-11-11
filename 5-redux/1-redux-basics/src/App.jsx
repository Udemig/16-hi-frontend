import { useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import { useDispatch } from "react-redux";
import { getTodos } from "./redux/actions/todo-actions";

const App = () => {
  const dispatch = useDispatch();

  // Bileşen ekrana basılınca: api isteği at, yanıtı reducera haber ver
  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div className="h-screen container mx-auto p-10">
      <h1 className="text-2xl text-center font-bold">
        <span className="text-yellow-600">Redux</span> CRUD
      </h1>

      <Form />

      <List />
    </div>
  );
};

export default App;
