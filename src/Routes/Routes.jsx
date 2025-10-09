import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Error from "../Pages/Errors/Error";
import Home from "../Pages/Home/Home";
import AllApp from "../Pages/AllApp/AllApp";
import AppDetails from "../Pages/AppDetails/AppDetails";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import InstalledApps from "../Pages/InstalledApps/InstalledApps";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error></Error>,
    hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
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
        path: "/installedapps",
        Component: InstalledApps,
      },
      {
        path: "/appdetails/:id",
        Component: AppDetails,
      },
    ],
  },
]);

export default router;