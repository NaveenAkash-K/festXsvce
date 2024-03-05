import { useEffect } from "react";
import Header from "../components/Header";
import styles from "../styles/page/sponser.module.css";
import IIM from '../assets/images/2IIM.png';
const Sponsers: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sponsors | Technoways"
  }, []);
  return (
    <div id="sponsors">
      <Header />
      <div className={styles.container}>
        <h1>Sponsors</h1>
        <br />
        <div className={styles.workContainer}>
          {/* <NavLink to={"/"} style={{ textDecoration: "none", color: "white" }}>
            Coming Soon!!
          </NavLink> */}
          <img src={IIM} alt="2IIM" width={"100vw"} height={"100vh"} />
          <h1>EVENT SPONSOR</h1>
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
