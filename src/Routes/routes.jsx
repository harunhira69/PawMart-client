import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NotFound from "../Pages/NotFound";
import BannerSection from "../Pages/BannerSection/BannerSection";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<NotFound></NotFound>,
    children:[
        {
            path:'login',
            Component:Login
        },
        {
            path:'register',
            Component:Register
        },
        {
          path:'home',
          Component:BannerSection
        }
    ]
  },
]);
export default router;