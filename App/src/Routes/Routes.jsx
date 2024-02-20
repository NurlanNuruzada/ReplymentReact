
import { MainLayout } from "../Layouts/MainLayout";
import { useRoutes } from "react-router";
import Home from "../Pages/Home/Home";
export default function Routes() {
  let routes = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          element: <Home/>,
          path: "/",
        },
      ],
    },
  ];
return useRoutes(routes);
}
