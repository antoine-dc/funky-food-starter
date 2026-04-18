import { createBrowserRouter } from "react-router";
import Layout from "../Layout";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import Home from "../pages/Home";
import Dish from "../components/Dish/Dish";
import { DishDetail } from "../pages/DishDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/dish/:id",
        element: <DishDetail />,
      },
      {
        path: "/*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
