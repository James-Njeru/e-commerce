import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import OurStore from "./pages/OurStore.jsx";
import Blog from "./pages/Blog.jsx";
import CompareProduct from "./pages/CompareProduct.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Forgotpassword from "./pages/Forgotpassword.jsx";
import Resetpassword from "./pages/Resetpassword.jsx";
import SingleBlog from "./pages/SingleBlog.jsx";
import RefundPolicy from "./pages/RefundPolicy.jsx";
import ShippingPolicy from "./pages/ShippingPolicy.jsx";
import TermandConditions from "./pages/TermandConditions.jsx";
import PrivacyPolicy from "./pages/PrivPolicy.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/product",
        element: <OurStore />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <SingleBlog />,
      },
      {
        path: "/compare-product",
        element: <CompareProduct />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/forgot-password",
        element: <Forgotpassword />,
      },
      {
        path: "/reset-password",
        element: <Resetpassword />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/refund-policy",
        element: <RefundPolicy />,
      },
      {
        path: "/shipping-policy",
        element: <ShippingPolicy />,
      },
      {
        path: "/term-conditions",
        element: <TermandConditions />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
