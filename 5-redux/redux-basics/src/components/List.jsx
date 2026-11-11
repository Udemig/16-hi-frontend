import { useSelector } from "react-redux";
import Card from "./Card";

const List = () => {
  // store'da tutulan verilere abone ol (eriştik)
  const { todos } = useSelector((store) => store.todoReducer);

  return (
    <div className="space-y-10 mt-10">
      {todos.map((todo) => (
        <Card key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default List;
