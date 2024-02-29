import { useEffect } from "react";
import Header from "../components/Header";
import styles from "../styles/page/sponser.module.css";
import { NavLink } from "react-router-dom";
const Sponsers: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="sponsors">
      <Header />
      <div className={styles.container}>
        <h1>Sponsors</h1>
        <br />
        <div className={styles.workContainer}>Coming Soon!!</div>
      </div>
    </div>
  );
};

export default Sponsers;
