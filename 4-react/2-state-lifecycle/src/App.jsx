import { useState } from "react";
import car from "./assets/car.webp";
import Counter from "./components/Counter";
import Lamp from "./components/Lamp";
import BuyList from "./components/BuyList";
import FunctionComponent from "./components/FunctionComponent";
import ClassComponent from "./components/ClassComponent";
import UserList from "./components/UserList";
import RecipePicker from "./components/RecipePicker";
import Countdown from "./components/Countdown";

function App() {
  // bileşen gösterilsin mi?
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      {/* <h1>Anasayfa</h1>
      <img src="/favicon.svg" />
      <br />
      <img src={car} width={350} />
      <br />

      <Counter />
      <br /> */}

      {/* <Lamp />

      <BuyList /> */}

      {/* <FunctionComponent title="Fonksiyonel Bileşen" /> */}

      <button onClick={() => setIsVisible(!isVisible)}>Gizle / Göster</button>

      {isVisible && <Countdown />}
    </div>
  );
}

export default App;
