import { useState } from "react";
import Display from "./Display";

const SecondExa = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div>
      <h1>React.memo</h1>

      <Display count={count} />
      <button onClick={() => setCount(count + 1)}>Arttır (+1)</button>
      <br />
      <br />

      <h1>İsminiz: {name}</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default SecondExa;
