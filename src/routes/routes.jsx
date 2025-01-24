import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AddReviewPage from "../pages/AddReviewPage";
import AllReviewPage from "../pages/AllReviewPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MyReviewsPage from "../pages/MyReviewsPage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "./PrivateRoute";

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
        path: "/reviews",
        element: <AllReviewPage />,
      },
      {
        path: "/add-review",
        element: (
          <PrivateRoute>
            <AddReviewPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-reviews",
        element: <MyReviewsPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
