import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NotFound from "../Pages/NotFound";
import BannerSection from "../Pages/BannerSection/BannerSection";
import CategoryProducts from "../Pages/CategoryProducts/CategoryProducts";
import Home from "../Pages/Home/Home";
import PrivateRoutes from "./PrivateRoutes";
import AddListings from "../Pages/AddListings/AddListings";
import AllPetsSupplies from "../Pages/AllPetsSupplies/AllPetsSupplies";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import MyOrder from "../Pages/MyOrder/MyOrder";
import MyListings from "../Pages/MyListings/MyListings";
import Contact from "../component/Footer/Contact";
import Terms from "../component/Footer/Terms";
import Privacy from "../component/Footer/Privacy";
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
  {path:'add-listing',
    element:
     <PrivateRoutes>
       <AddListings></AddListings>
     </PrivateRoutes>
     },
     {
      path:'pets',
      element:<AllPetsSupplies></AllPetsSupplies>
     },
   {
  path: "product/:id",
  element: <PrivateRoutes>
    <ProductDetails />
  </PrivateRoutes>
},

{
  path:'my-orders',
  element:<PrivateRoutes>
    <MyOrder></MyOrder>
  </PrivateRoutes>
},
{
  path:'my-listings',
  element:<PrivateRoutes>
    <MyListings></MyListings>
  </PrivateRoutes>
},
{
  path:'/contact',
  element:<Contact></Contact>
},
{
  path:'terms',
  element:<Terms></Terms>
},
{
  path:'privacy',
  element:<Privacy></Privacy>
}









    ]
  },
]);
export default router;