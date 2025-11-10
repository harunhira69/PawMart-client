import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NotFound from "../Pages/NotFound";
import BannerSection from "../Pages/BannerSection/BannerSection";
import CategoryProducts from "../Pages/CategoryProducts/CategoryProducts";
import Home from "../Pages/Home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<NotFound></NotFound>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
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
          element:<Home></Home>
        },
  { path: "category/:category", element: <CategoryProducts /> } ,
    ]
  },
]);
export default router;