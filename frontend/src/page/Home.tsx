import styles from "../styles/page/home.module.css";
import Header from "../components/Header";
import About from "./About";
import Location from "./Location";
import Scroller from "../components/Scroller";

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.home}>
        <div className={styles.content}>
          <h1>FEST X SVCE</h1>
          <br />
          <p>RETROTECH REVIVAL</p>
          <br />
          <h1>10:15:20</h1>
          <Scroller/>
        </div>
      </div>
      <About />
      <Location />
    </>
  );
};

export default Home;
