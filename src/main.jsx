import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import AuthContextProvider from "./contexts/AuthContextProvider.jsx";
import "./index.css";
import router from "./routes/routes.jsx";
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthContextProvider>
        <RouterProvider router={router} />
        <ToastContainer/>
      </AuthContextProvider>
    </HelmetProvider>
  </StrictMode>
);
