import "./App.css";
import EventInfo from "./page/EventInfo";
import Header from "./components/Header";
import Event from "./page/Event";
import Home from "./page/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/events",
    element: <Event />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
