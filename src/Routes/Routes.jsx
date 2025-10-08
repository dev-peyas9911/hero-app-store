import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Error from "../Pages/Errors/Error";
import Home from "../Pages/Home/Home";
import AllApp from "../Pages/AllApp/AllApp";
import InstallApp from "../Pages/InstalledApp/InstallApp";

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

export default router;