import Header from "../components/Header";
import styles from "../styles/page/getpass.module.css";
import eve from "../assets/images/eventCard.png";
import { passesData } from "../data/passesData";

const GetPass: React.FC = () => {
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
                <img src={eve} alt="~" className={styles.img} />
                <h2 className={styles.title}>{data.name}</h2>
                <h3>{data.price}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GetPass;
