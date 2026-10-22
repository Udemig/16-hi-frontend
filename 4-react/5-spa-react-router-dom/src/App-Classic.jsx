import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import Novel from "./pages/Novel";
import Story from "./pages/Story";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Header />

        <main className="flex-fill p-3 px-md-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ürünler" element={<Products />} />
            <Route path="/hakkımızda" element={<About />} />
            <Route path="/ürünler/:id" element={<Detail />} />

            <Route path="/kategori" element={<Category />}>
              <Route path="roman" element={<Novel />} />
              <Route path="hikaye" element={<Story />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
