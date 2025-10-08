import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Error from "../Pages/Errors/Error";
import Home from "../Pages/Home/Home";
import AllApp from "../Pages/AllApp/AllApp";
import InstallApp from "../Pages/InstalledApp/InstallApp";
import AppDetails from "../Pages/AppDetails/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error></Error>,
    hydrateFallbackElement: <p>Loading</p>,
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
      {
        path: "/appdetails/:id",
        Component: AppDetails,
      },
    ],
  },
]);

export default router;