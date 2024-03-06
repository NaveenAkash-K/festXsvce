import "./App.css";
import Events from "./page/Events";
import DepartmentsPage from "./page/Departments";
import Home from "./page/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventInfo from "./page/EventInfo";
import Location from "./page/Location";
import About from "./page/About";
// import FestXsvce from "./components/BottomText";
// import AnimatedCursor from "react-animated-cursor";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import bg from "./assets/images/newBackground.png";
import { useEffect, useState } from "react";
import GetPass from "./page/GetPass";
import Sponsers from "./page/Sponsers";
import ReactGA from "react-ga";
import Footer from "./components/Footer";
import Workshops from "./page/Workshops";
import Proshows from "./page/Proshows";
import AutoExpo from "./page/AutoExpo";
import WorkshopItem from "./components/WorkshopItem";
import TermsAndConditions from "./page/terms";
import EventForm from "./page/EventForm";

ReactGA.initialize("UA-228658137-1");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/location",
    element: (
      <>
        <Location />
        <Footer />
      </>
    ),
  },
  {
    path: "/departments",
    element: (
      <>
        <DepartmentsPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/departments/:department",
    element: (
      <>
        <Events />
        <Footer />
      </>
    ),
  },
  {
    path: "/departments/:department/:eventId",
    element: <EventInfo />
  },
  {
    path: "/termsandconditions",
    element: <TermsAndConditions />
  },
  {
    path: "/eventForm",
    element: (
      <>
        <EventForm />
        {/* <Footer /> */}
      </>
    ),
  },
  {
    path: "/getPass",
    element: <GetPass />
  },
  {
    path: "/workshops",
    element: (
      <>
        <Workshops />
        <Footer />
      </>
    ),
  },
  {
    path: "/workshops/:workId",
    element: <WorkshopItem />
  },
  {
    path: "/proshows",
    element: (
      <>
        <Proshows />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/sponsors",
    element: (
      <>
        <Sponsers />
        <Footer />
      </>
    ),
  },
  // {
  //   path: "/autoexpo",
  //   element: (
  //     <>
  //       <AutoExpo />
  //       <Footer />
  //     </>
  //   ),
  // },
]);

function App() {
  // const AnimatedCursorMemo = React.memo(AnimatedCursor);
  // const [screenWidth, setScreenWidth] = useState<number>(0);
  // useEffect(() => {
  //   setScreenWidth(window.innerWidth);
  //   window.addEventListener("resize", () => {
  //     setScreenWidth(window.innerWidth);
  //   });
  // }, []);
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      {/* {screenWidth > 770 ? (
        <AnimatedCursorMemo
          innerSize={5}
          outerSize={30}
          innerScale={0}
          outerScale={2}
          outerStyle={{
            mixBlendMode: "difference",
            // backgroundColor: "#4d291a90",
            backgroundColor: "#d0c19c",
          }}
          innerStyle={{
            backgroundColor: "white",
            mixBlendMode: "difference",
          }}
        />
      ) : null} */}
      <div className="background-container">
        <img src={bg} alt="Background Image" className="background-image" />
      </div>
      <ToastContainer position="top-center" theme="dark" />
      <RouterProvider router={router} />
      {/* <FestXsvce /> */}
    </>
  );
}

export default App;
