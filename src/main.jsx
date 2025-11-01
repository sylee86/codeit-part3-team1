import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import App from "./App.jsx";
import CreatePage from "@/pages/CreatePage/CreatePage";
import ListPage from "@/pages/ListPage/ListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Outlet />
      </App>
    ),
    children: [
      {
        index: true,
        element: <ListPage />,
      },
      {
        path: "edit",
        element: <CreatePage />,
      },
    ],
  },
]);
export default function Router() {
  return <RouterProvider router={router} />;
}
