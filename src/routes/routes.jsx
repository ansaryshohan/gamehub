import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import AllReviewPage from "../pages/AllReviewPage";
import MyReviewsPage from "../pages/MyReviewsPage";
import AddReviewPage from "../pages/AddReviewPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path:"/reviews",
        element: <AllReviewPage />,
      },
      {
        path:"/add-review",
        element: <AddReviewPage />,
      },
      {
        path:"/my-reviews",
        element: <MyReviewsPage />,
      },
      {
        path:"/login",
        element:<LoginPage/>
      },
      {
        path:"/register",
        element:<RegisterPage/>
      },
    ],
  },
  
]);

export default router;
