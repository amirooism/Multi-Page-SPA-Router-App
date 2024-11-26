import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import ErroPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductsDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErroPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <Products /> },
      { path: "/Products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
