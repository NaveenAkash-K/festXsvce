import Header from "../components/Header";
import styles from "../styles/page/getpass.module.css";
// import eve from "../assets/images/eventCard.png";
import { passesData } from "../data/passesData";
import Footer from "../components/Footer";
import { useEffect } from "react";

const GetPass: React.FC = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
    document.title = "Get Passes | Technoways"
  },[])
  return (
    <>
      <Header />
      <div className={styles.body}>
        <div className={styles.container}>
          <h1>Get Passes</h1>
          <br />
          <div className={styles.detail}>
            {passesData.map((data, index) => (
              <div className={styles.detailContainer} key={index}>
                {/* <img src={eve} alt="~" className={styles.img} /> */}
                <div className={styles.img}></div>
                <h2 className={styles.title}>{data.name}</h2>
                {/* <h3>{data.price}</h3> */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default GetPass;
