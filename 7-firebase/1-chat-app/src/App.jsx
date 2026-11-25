import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Room from "./pages/Room";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Room />} />
        <Route path="/chat/:room" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
