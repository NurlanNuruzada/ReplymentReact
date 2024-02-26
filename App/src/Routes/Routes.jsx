
import { MainLayout } from "../Layouts/MainLayout";
import { useRoutes } from "react-router";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/Errors/NotFound/NotFound";
import Server from "../Pages/Errors/Server/Server";

export default function Routes() {
  let routes = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          element: <Home />,
          path: "/",
        },
      ],
    },
    {
      path: "/server-error",
      element: <Server />,
    },
    {
      path: "*",
      element: <NotFound />,
    }
  ];
  return useRoutes(routes);
}
