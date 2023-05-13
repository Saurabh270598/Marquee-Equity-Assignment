import { createBrowserRouter } from "react-router-dom";
import DashboardComponent from "../components/dashboard";
import LoginPage from "../components/login";
import { APP_ROUTE_PATH } from "../enumeration/common.enum";

const routes = [
  {
    path: APP_ROUTE_PATH.loginView,
    element: <LoginPage />,
    errorElement: <LoginPage />,
  },
  {
    path: APP_ROUTE_PATH.defaultRoute,
    element: <LoginPage />,
    errorElement: <LoginPage />,
  },
  {
    path: APP_ROUTE_PATH.dashboardView,
    element: <DashboardComponent />,
    errorElement: <LoginPage />,
  },
];

export const router = createBrowserRouter(routes);
