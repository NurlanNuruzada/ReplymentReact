
import { MainLayout } from "../Layouts/MainLayout";
import { useRoutes } from "react-router";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/Errors/NotFound/NotFound";
import Server from "../Pages/Errors/Server/Server";
import UnderConstuction from "../Pages/UnderConstruction/UnderConstuction";
import { ChakraProvider } from '@chakra-ui/react'
import SignInPage from "../Pages/SignInPage/SignInPage";

export default function Routes() {
  let routes = [
    {
      path: "/beta",
      element: <MainLayout />,
      children: [
        {
          path: "/beta/",
          element: <Home />,
        },
        {
          path: "/beta/SignUp",
          element: <SignInPage />,

        },
      ],
    },
    {

      element: <ChakraProvider><UnderConstuction /></ChakraProvider>,
      path: "/",
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
