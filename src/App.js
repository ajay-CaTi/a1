import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Body from "../components/Body";
const About = lazy(() => import("../components/About"));
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "../components/Contact";
import Error from "../components/Error";
const Grocery = lazy(() => import("../components/Grocery"));
import RestaurantMenu from "../components/RestaurantMenu";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

// createBrowserRouter takes list of path

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/res/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
