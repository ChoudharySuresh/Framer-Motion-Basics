import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import Header from "./Components/Header/Header.jsx";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./Pages/Body.jsx";
import Example from "./Pages/Example.jsx";
import StaggeredText from "./Components/StaggeredText/StaggeredText.jsx";
import Random from "./Pages/Random.jsx";

const Structure = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Structure />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/Example",
        element: <Example />,
        children: [
          {
            path: "/Example/staggeredText",
            element: <StaggeredText />,
          },
          {
            path: "/Example/random",
            element: <Random />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <RouterProvider router={appRouter} />
  </ThemeProvider>
);
