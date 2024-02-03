import styles from "../styles/home.module.css";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
    <Header/>
    <div className={styles.home}>
      <div className={styles.content}>
        <h1>FEST X SVCE</h1>
        <br />
        <p>RETROTECH REVIVAL</p>
        <br />
        <h1>10:15:20</h1>
      </div>
      <div className={styles.festxsvce}>
        <p>FESTXSVCE FESTXSVCE FESTXSVCE FESTXSVCE</p>
        <p>FESTXSVCE FESTXSVCE FESTXSVCE FESTXSVCE</p>
      </div>
    </div>
    </>
  );
};

export default Home;
