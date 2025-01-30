import { createBrowserRouter } from "react-router-dom";
import ModalReviewContextProvider from "../contexts/ModalReviewContextProvider";
import MainLayout from "../layouts/MainLayout";
import AddReviewPage from "../pages/AddReviewPage";
import AllReviewPage from "../pages/AllReviewPage";
import ErrorPage from "../pages/ErrorPage";
import GameDetailPage from "../pages/GameDetailPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MyReviewsPage from "../pages/MyReviewsPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";
import WishListPage from "../pages/WishListPage";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";

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
        path: "/reviews/:id",
        element: (
          <PrivateRoute>
            <GameDetailPage />
          </PrivateRoute>
        ),
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
        element: (
          <ModalReviewContextProvider>
            <MyReviewsPage />
          </ModalReviewContextProvider>
        ),
      },
      {
        path: "/wishlist",
        element: <WishListPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/login",
        element: (
          <RestrictedRoute>
            {" "}
            <LoginPage />
          </RestrictedRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <RestrictedRoute>
            {" "}
            <RegisterPage />
          </RestrictedRoute>
        ),
      },
    ],
  },
]);

export default router;
