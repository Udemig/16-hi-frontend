import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Basket from "./pages/Basket";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-vh-100 d-flex flex-column">
        <Header />

        <main className="flex-fill mt-3 px-md-5">
          <div className="container-fluid">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sepet" element={<Basket />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
