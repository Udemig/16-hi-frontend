import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./pages/Feed";
import Search from "./pages/Search";
import Category from "./pages/Category";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />

        <div className="flex w-full">
          <Sidebar />

          <main className="flex-1 overflow-x-hidden overflow-y-auto">
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/category/:category_name" element={<Category />} />
              <Route path="/watch" element={<Detail />} />
              <Route path="/results" element={<Search />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
