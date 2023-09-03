import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Body from "../components/Body";
const About = lazy(() => import("../components/About"));
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "../components/Contact";
import Error from "../components/Error";
const Grocery = lazy(() => import("../components/Grocery"));
import RestaurantMenu from "../components/RestaurantMenu";
import UserContext from "../components/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../components/utils/appStore";
import Cart from "../components/Cart";

const App = () => {
  const [userName, setuserName] = useState();

  useEffect(() => {
    const data = {
      name: "Ajay",
    };
    setuserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setuserName }}>
        <div>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
        path: "/cart",
        element: <Cart />,
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
