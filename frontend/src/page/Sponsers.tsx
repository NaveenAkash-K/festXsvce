import { useEffect } from "react";
import Header from "../components/Header";
import styles from "../styles/page/sponser.module.css";
import IIM from "../assets/images/2IIM.png";
import Impacteers from "../assets/images/impacteers.png";
import Cub from "../assets/images/cub.jpg";
import Cca from "../assets/images/cca.png";
const Sponsers: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sponsors | Technoways";
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
          <img src={Impacteers} alt="2IIM" className={styles.img}/>
          <h1>PLATFORM SPONSOR</h1>
          <img src={IIM} alt="2IIM" className={styles.img}/>
          <h1>EVENT SPONSOR</h1>
          <div className={styles.bank}>
            <img src={Cub} alt="2IIM" width={"200vw"} height={"100vh"} />
            <img src={Cca} alt="2IIM" width={"250vw"} height={"100vh"} />
          </div>
          <h1>PAYMENT PORTAL</h1>
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
