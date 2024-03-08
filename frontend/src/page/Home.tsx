import styles from "../styles/page/home.module.css";
import Header from "../components/Header";
import About from "./About";
import Location from "./Location";
import Scroller from "../components/Scroller";
import DepartmentsPage from "./Departments";
import Timer from "../components/Timer";
import Footer from "../components/Footer";
import Sponsers from "./Sponsers";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import ReactGA from "react-ga";
import { useEffect } from "react";
const Home = () => {
  useEffect(()=>{
    document.title = "Home | Technoways";
    ReactGA.pageview(window.location.pathname)
  },[])
  return (
    <>
      <Header />
      <div className={styles.home} id="home">
        <div style={{ marginTop: "4%" }}></div>
        <div className={styles.content}>
          <p className={styles.rev}>RETROTECH REVIVAL</p>
          <h1 className={styles.tech}>
            <span>T</span>
            <span>E</span>
            <span>C</span>
            <span>H</span>
            <span>N</span>
            <span>O</span>
            <span>W</span>
            <span>A</span>
            <span>Y</span>
            <span>S</span>
          </h1>
          <p className={styles.time}>MAR 15,16 2024</p>
          <br />
          <div style={{ paddingTop: "8%" }}></div>
          <p className={styles.timer}>
            <Timer />
          </p>
          <p>
            <Scroller />
          </p>
        </div>
        <div style={{ height: "8%" }}></div>
        <div className={styles.eventInfo}>
          <Link to="departments" smooth={true} duration={700}>
            <div className={styles.title}>Events</div>
          </Link>
          <NavLink
            to={"/workshops"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className={styles.title}>Workshops</div>
          </NavLink>
          <NavLink
            to={"/proshows"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className={styles.title}>Proshows</div>
          </NavLink>
          {/* <NavLink
            to={"/getPass"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className={styles.title}>Get Pass</div>
          </NavLink> */}
          <a
            href="https://forms.gle/jLVFdaH8UxdiQeqaA"
            target="_blank" rel="noreferrer"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className={styles.title}>Get Pass</div>
          </a>
        </div>
      </div>
      <About />
      <DepartmentsPage />
      <Location />
      <Sponsers />
      <Footer />
    </>
  );
};

export default Home;
