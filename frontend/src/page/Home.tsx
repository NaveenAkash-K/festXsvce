import styles from "../styles/page/home.module.css";
import Header from "../components/Header";
import About from "./About";
import Location from "./Location";
import Scroller from "../components/Scroller";
import DepartmentsPage from "./Departments";
import Timer from "../components/Timer";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.home} id="home">
        <div className={styles.content}>
          <h1>TECHFEST-SVCE</h1>
          <br />
          <p>RETROTECH REVIVAL | MAR 15,16 2024</p>
          <br />
          <Timer />
          <Scroller />
        </div>
      </div>
      <About />
      <DepartmentsPage />
      <Location />
      <Footer/>
    </>
  );
};

export default Home;
