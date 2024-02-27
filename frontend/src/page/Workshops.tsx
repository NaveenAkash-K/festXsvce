import React, { useEffect } from "react";
import Header from "../components/Header";
import styles from "../styles/page/workshops.module.css";
const Workshops: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className={styles.space}></div>
      <div className={styles.container}>
        <h1 className={styles.title}>Workshops</h1>
        <div className={styles.workContainer}>
          <button className={styles.button}>
            Coming Soon!!
            <span></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Workshops;
