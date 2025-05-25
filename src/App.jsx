import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Loading from "./common/loading/loading";
import NotFound from "./common/NotFound/NotFound";
import Contact from "./component/Contact/Contact";
import About from "./component/About/About";
// Lazy-loaded components
const Layout = React.lazy(() => import("./layout/Layout/Layout"));
const Home = React.lazy(() => import("./component/Home/Home"));
const Products = React.lazy(() => import("./component/Products/Products"));
const ProductDetails = React.lazy(() => import("./common/productDetails/productDetails"));
const Categories = React.lazy(() => import("./component/Categories/Categories"));
const Cartpage = React.lazy(() => import("./component/Cartpage/Cartpage"));
const ProductCategory = React.lazy(() => import("./component/ProductCategory/ProductCategory"));
const Compare = React.lazy(() => import("./component/Compare/Compare"));

export default function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <Suspense fallback={<Loading />}>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          path: "",
          element:
                      <Suspense fallback={<Loading />}>

          <Home />            </Suspense>

        },
        {
          path: "/Products",
          element: (
            <Suspense fallback={<Loading />}>
              <Products />
            </Suspense>
          ),
        },
        {
          path: "/productDetails/:id",
          element: (
            <Suspense fallback={<Loading />}>
              <ProductDetails />
            </Suspense>
          ),
        },
        {
          path: "/cart",
          element: (
            <Suspense fallback={<Loading />}>
              <Cartpage />
            </Suspense>
          ),
        },
        {
          path: "/categories",
          element: (
            <Suspense fallback={<Loading />}>
              <Categories />
            </Suspense>
          ),
        },
        {
          path: "/category/:id",
          element: (
            <Suspense fallback={<Loading />}>
              <ProductCategory />
            </Suspense>
          ),
        },
        {
          path: "/compare",
          element: (
            <Suspense fallback={<Loading />}>
              <Compare />
            </Suspense>
          ),
        },
        {
          path: "/contact",
          element: (
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          ),
        },
        {
          path: "/about",
          element: (
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          ),
        }



      ],


    },
    {
      path: '*',
      element:<NotFound/>

    }
  ]);

  return <RouterProvider router={router} />;
}