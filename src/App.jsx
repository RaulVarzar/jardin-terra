import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Projects from "./components/pages/Projects";
import Homepage from "./components/pages/Homepage";
import Layout from "./components/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Homepage /> },
        {
          path: "projects",
          children: [
            {
              index: true,
              element: <Projects />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
