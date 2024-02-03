import "./App.css";
import Events from "./page/Events";
import DepartmentsPage from "./page/Departments";
import Home from "./page/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventInfo from "./page/EventInfo";
import Location from "./page/Location";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/location",
    element: <Location />,
  },
  {
    path: "/departments",
    element: <DepartmentsPage />,
  },
  {
    path: "/departments/:department",
    element: <Events />,
  },
  {
    path: "/departments/:department/:event",
    element: <EventInfo />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
