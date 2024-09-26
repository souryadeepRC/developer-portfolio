import { Navigate } from "react-router-dom";
import ErrorPage from "src/ErrorPage";
import PublicLayout from "src/components/layout/PublicLayout";
import { Home } from "src/pages";

const basicRoutes = [
  { index: true, element: <Navigate to="home" replace /> },
  {
    path: "home",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "another",
        element: <div>another</div>,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/test",
    element: <div>test</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "test/:id",
    element: <div>test : 2</div>,
    errorElement: <ErrorPage />,
  },
];
const routes: any = [
  {
    path: "",
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: basicRoutes,
  },
];
export default routes;
