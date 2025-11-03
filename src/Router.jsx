import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import CreatePage from "@/pages/CreatePage/CreatePage";
import ListPage from "@/pages/ListPage/ListPage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <ListPage /> },
      { path: "edit", element: <CreatePage /> },
    ],
  },
]);
export default function Router() {
  return <RouterProvider router={router} />;
}
