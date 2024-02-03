import "./App.css";
import EventInfo from "./page/EventInfo";
import Header from "./components/Header";
import Event from "./page/Event";
import Home from "./page/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventAddInfo from "./page/EventAddInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/events",
    element: <Event />,
  },
  {
    path:"/events/info",
    element:<EventAddInfo/>,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
