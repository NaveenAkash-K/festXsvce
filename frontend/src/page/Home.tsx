import styles from "../styles/page/home.module.css";
import Header from "../components/Header";
import About from "./About";
import Location from "./Location";
import Scroller from "../components/Scroller";
import DepartmentsPage from "./Departments";
import Timer from "../components/Timer";
import Footer from "../components/Footer";
import Sponsers from "./Sponsers";

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.home} id="home">
        <div className={styles.content}>
          <h1>
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
          <br />
          <p>RETROTECH REVIVAL | MAR 15,16 2024</p>
          <br />
          <p>
            <Timer />
          </p>
          <p>
            <Scroller />
          </p>
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
