import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import CreatePage from "@/pages/CreatePage.jsx";
import ListPage from "@/pages/ListPage.jsx";
import NotFoundPage from "@/pages/NotFoundPage.jsx";
import ErrorPage from "@/pages/ErrorPage.jsx";
import AccordionPage from "@/pages/AccordionPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ListPage /> },
      { path: "edit", element: <CreatePage /> },
      { path: "accordion", element: <AccordionPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
export default function Router() {
  return <RouterProvider router={router} />;
}
