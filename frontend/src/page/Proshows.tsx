import React, { useEffect } from "react";
import Header from "../components/Header";
import styles from "../styles/page/proshows.module.css";
import { NavLink } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ark3 from "../assets/images/3.webp";
import ark1 from "../assets/images/1.webp";
import ark4 from "../assets/images/4.webp";
import ark2 from "../assets/images/2.webp";

const Proshows: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Proshows | Technoways";
  }, []);

  return (
    <>
      <Header />
      <div className={styles.space}></div>
      <div className={styles.container}>
        <h1 className={styles.title}>Proshows</h1>
        <br />
        <div className={styles.workContainer}>
          <h3>
            The Pro-Show event of the Technoways is here to take you into the
            world of music and excitement with dynamic energy and unforgettable
            moments with your friends🎤🎶
          </h3>
          <br />
          <h3>
            Get mesmerized in the voice of the Don singer, the one and only
            Adithya R K
          </h3>
          <br />
          <center>
            <div className={styles.details}>
              <h3>Venue: MPH, SVCE</h3>
              <br />
              <h3>Time: 2:30PM onwards</h3>
              <br />
              <h3>Date: 16th March</h3>
            </div>
          </center>
          <br />
          <br />
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            autoPlay={true}
            dynamicHeight={true}
          >
            <div>
              <img src={ark1} alt="" />
            </div>
            <div>
              <img src={ark2} alt="" />
            </div>
            <div>
              <img src={ark3} alt="" />
            </div>
            <div>
              <img src={ark4} alt="" />
            </div>
          </Carousel>
          <a href="https://forms.gle/jLVFdaH8UxdiQeqaA">
            <button className={styles.getPass}>Get Pass</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Proshows;
