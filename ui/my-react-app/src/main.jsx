import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../../../../E-Commerce-frontend/src/App.jsx';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Shop from '../../../../E-Commerce-frontend/src/Pages/Shop.jsx';
import ErrorPage from '../../../../E-Commerce-frontend/src/error-page.jsx';
import ShopCatagory from '../../../../E-Commerce-frontend/src/Pages/ShopCatagory.jsx';
import LoginSignup from '../../../../E-Commerce-frontend/src/Pages/LoginSignup.jsx';
import Cart from '../../../../E-Commerce-frontend/src/Pages/Cart.jsx';
import Product from '../../../../E-Commerce-frontend/src/Pages/Product.jsx';
import ShopContextProvider from '../../../../E-Commerce-frontend/src/Context/ShopContext.jsx';
import Admin from '../../../../E-Commerce-frontend/src/Admin.jsx';
import AdminHomePage from '../../../../E-Commerce-frontend/src/Pages/AdminHomePage.jsx';
import AddProduct from '../../../../E-Commerce-frontend/src/Components/AddProduct/AddProduct.jsx';
import ListProduct from '../../../../E-Commerce-frontend/src/Components/ListProduct/ListProduct.jsx';



const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Shop />,
        errorElement: <ErrorPage/>
      },
      {
        path:"men",
        element: <ShopCatagory catagory="men" />,
        errorElement: <ErrorPage/>
      },
      {
        path:"women",
        element: <ShopCatagory catagory="women" />,
        errorElement: <ErrorPage/>
      },
      {
        path:"kid",
        element: <ShopCatagory catagory="kid" />,
        errorElement: <ErrorPage/>
      },
      {
        path:"login",
        element: <LoginSignup/>,
        errorElement: <ErrorPage/>
      },
      {
        path:"cart",
        element: <Cart/>,
        errorElement: <ErrorPage/>
      },
      {
        path:"product/:productId",
        element: <Product/>,
        errorElement: <ErrorPage/>
      }
    ]
  },
  //heyy its cool
  {
    path:'/admin',
    element: <Admin/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "",
        element: <AdminHomePage />,
        errorElement: <ErrorPage/>
      },
      {
        path: "addproduct",
        element: <AddProduct />,
        errorElement: <ErrorPage/>
      },
      {
        path: "listproduct",
        element: <ListProduct />,
        errorElement: <ErrorPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <ShopContextProvider>
    <RouterProvider router={router} />
    </ShopContextProvider>
  </React.StrictMode>,
)
