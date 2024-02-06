import "./App.css";
import Events from "./page/Events";
import DepartmentsPage from "./page/Departments";
import Home from "./page/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventInfo from "./page/EventInfo";
import Location from "./page/Location";
import About from "./page/About";
import Login from "./page/Login";
import Signup from "./page/Signup";
import FestXsvce from "./components/FestXsvce_text";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

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
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function App() {
  return (
    <>
      <ToastContainer position="top-center" theme="dark" />
      <RouterProvider router={router} />
      <FestXsvce />
    </>
  );
}

export default App;
