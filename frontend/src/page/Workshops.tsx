import React, { useEffect } from "react";
import Header from "../components/Header";
import styles from "../styles/page/workshops.module.css";
import { useNavigate } from "react-router-dom";
import workshopData from "../data/workshopData";
import ReactGA from "react-ga";
const Workshops: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Workshops | Technoways";
  }, []);
  ReactGA.event({
    category:"Workshop ",
    action:"Workshop Info",
    label:"Workshop Label"
  })
  return (
    <>
      <Header />
      <div className={styles.space}></div>
      <div className={styles.container}>
        <h1 className={styles.title}>Workshops</h1>
        <br />
        <div className={styles.list}>
          {workshopData.map((data, index) => (
            <div
              key={index}
              className={styles.cardContainer}
              onClick={() => {
                navigate(`./${data.id}`);
              }}
            >
              <h4 className={styles.titles}>{data.name}</h4>
              <h4 className={styles.shortDes}>{data.shrtDesc}</h4>
              <h4 style={{margin:'1vw 0'}}>By {data.dept}</h4>
              <h4 className={styles.know}>Know More</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Workshops;
