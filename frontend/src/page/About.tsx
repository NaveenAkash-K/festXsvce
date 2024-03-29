import Header from "../components/Header";
import styles from "../styles/page/about.module.css";
// import svce from "../assets/images/svce.png";
// import Footer from "../components/Footer";
import { useEffect } from "react";

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About | Technoways"
  }, []);
  return (
    <>
      <Header />
      <div className={styles.aboutPage}  id="about">
        <div className={styles.space}></div>
        <div className={styles.aboutData}>
          <div className={styles.aboutContainer}>
            <h4>34+</h4>
            <br />
            <h3>Events</h3>
          </div>
          <div className={styles.aboutContainer}>
            <h4>8+</h4>
            <br />
            <h3>Workshops</h3>
          </div>
          <div className={styles.aboutContainer}>
            <h4>1</h4>
            <br />
            <h3>Proshow</h3>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.about}>
            <h1 className={styles.title}>About</h1>
            <h3>
              TECHNOWAYS is SVCE's inaugural interdisciplinary technical event
              that highlights technology, innovation, and creativity. It will be
              conducted on the 15th and 16th of March 2024 this year. It offers
              a vibrant platform for students to exhibit their technical skills
              and creative flair. The festival unites students, faculty, and
              industry professionals from different engineering backgrounds thus
              promoting collaboration and showcasing the power of collective
              intelligence. Technoways embraces a holistic approach to
              technology, transcending academic boundaries, and encouraging
              exploration of interdisciplinary intersections. Participants
              engage in hands-on experiences, competitions, and workshops,
              gaining insights about emerging trends. The event catalyzes
              innovation, with prototypes paving the way for
              future breakthroughs.
            </h3>
          </div>
          <div className={styles.aboutSvce}>
            <div className={styles.wrapper}>
              <h1 className={styles.title}>About SVCE</h1>
              <h3 className={styles.text}>
                SVCE is a unit of Sri Venkateswara Educational and Health Trust
                (SVEHT). The Trust was founded on 1 August 1985 at the behest
                and benign blessings of His Holiness Pujashree Kanchi Kamakoti
                Peedathipathi Sri Jayendra Saraswathi Swamigal. Dr. A. C.
                Muthiah, a renowned engineer, industrialist, and philanthropist,
                is the Chairman of the Governing Council of the college. The
                college is on a 95-acre lush green Campus. It is housed in
                architecturally exquisite buildings with ample infrastructure
                such as classrooms, laboratories, libraries, sports arena,
                canteen, hostels, dispensary, bank etc.,
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
