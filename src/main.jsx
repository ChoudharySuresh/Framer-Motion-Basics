import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import Header from "./Components/Header/Header.jsx";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./Pages/Body.jsx";
import Example from "./Pages/Example.jsx";
import StaggeredText from "./Components/Examples/StaggeredText/StaggeredText.jsx";
import CardAnimation1 from "./Pages/CardAnimations/CardAnimation1.jsx";
import LearningResourcePage from "./Pages/LearningResources/LearningResourcePage.jsx";
import ElegantTextReveal from "./Components/Examples/ElegantTextReveal/ElegantTextReveal.jsx";

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
            path: "/Example/elegant_text_reveal",
            element: <ElegantTextReveal />,
          },
          {
            path: "/Example/cardanimation1",
            element: <CardAnimation1 />,
          },
        ],
      },
      {
        path: "/learning-resources",
        element: <LearningResourcePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <RouterProvider router={appRouter} />
  </ThemeProvider>
);
