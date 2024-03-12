
import { MainLayout } from "../Layouts/MainLayout";
import { useRoutes } from "react-router";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/Errors/NotFound/NotFound";
import Server from "../Pages/Errors/Server/Server";
import UnderConstuction from "../Pages/UnderConstruction/UnderConstuction";
import { ChakraProvider } from '@chakra-ui/react'
import SignInPage from "../Pages/SignInPage/SignInPage";
import SignInLayout from "../Layouts/SignInLayout/SignInLayout";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";
import MenuLayout from "../Layouts/MenuLayout/MenuLayout";
import Customize from '../Pages/Customize/Customize'
import Trigger from "../Pages/Trigger/Trigger";
import Account from '../Pages/Account/Account'
import Widgets from '../Pages/Widgets/Widgets'
import Subscription from '../Pages/Subscription/subscription'

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
      ],
    },
    {
      path: "/beta",
      element: <SignInLayout />,
      children: [
        {
          path: "/beta/Login",
          element: <SignInPage />,
        },
        {
          path: "/beta/Register",
          element:<ChakraProvider><SignUpPage /></ChakraProvider>
        },
      ],
    },
    {
      path: "/beta",
      element: <MenuLayout padding={'padding: 30px 80px 30px 80px'} height={"107px"} border={"1px solid #CBCED2"}  titleColor={'black'} position="initial" />,
      children: [
        {
          path: "/beta/customize",
          element: <ChakraProvider><Customize /></ChakraProvider>,
        },
        {
          path: "/beta/trigger",
          element: <Trigger />,
        },
        {
          path: "/beta/widgets",
          element: <Widgets />,
        },
        {
          path: "/beta/account",
          element: <Account />,
        },
        {
          path: "/beta/Subscription",
          element: <Subscription />,
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
