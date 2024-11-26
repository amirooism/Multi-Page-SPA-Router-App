import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import ErroPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErroPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <Products /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
