import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/coin/:id", element: <Detail /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
