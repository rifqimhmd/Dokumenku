import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoverLetterPage from "./pages/CoverLetterPage";
import ResignLetterPage from "./pages/ResignLetterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <div>Error</div>,
  },
  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <div>Error</div>,
  },
  {
    path: "/suratlamaran",
    element: <CoverLetterPage />,
    errorElement: <div>Error</div>,
  },
  {
    path: "/suratresign",
    element: <ResignLetterPage />,
    errorElement: <div>Error</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
