import lightOpen from "../assets/light_open.png";
import lightClosed from "../assets/light_closed.png";
import { useState } from "react";

const Lamp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>Lamba</h1>

      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Kapat" : "Aç"}</button>
      <br />
      <br />

      <p>
        Lamba şu anda <b>{isOpen ? "Açık" : "Kapalı"}</b>
      </p>
      <br />
      <br />

      <img src={isOpen ? lightOpen : lightClosed} width={300} />
    </div>
  );
};

export default Lamp;
