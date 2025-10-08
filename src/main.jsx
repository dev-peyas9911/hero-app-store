import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Errors/Error";
import AllApp from "./Pages/AllApp/AllApp";
import InstallApp from "./Pages/InstalledApp/InstallApp";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allapp",
        Component: AllApp,
      },
      {
        path: "/installedapp",
        Component: InstallApp,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
