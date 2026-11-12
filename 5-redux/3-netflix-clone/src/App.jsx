import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WatchList from "./pages/watch-list";
import Home from "./pages/home";
import Movie from "./pages/movie";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen padding">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/watch-list" element={<WatchList />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
