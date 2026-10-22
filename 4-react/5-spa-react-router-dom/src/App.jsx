import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Novel from "./pages/Novel";
import Story from "./pages/Story";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/ürünler", element: <Products /> },
      { path: "/hakkımızda", element: <About /> },
      { path: "/ürünler/:id", element: <Detail /> },
      {
        path: "/kategori",
        element: <Category />,
        children: [
          { path: "roman", element: <Novel /> },
          { path: "hikaye", element: <Story /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
