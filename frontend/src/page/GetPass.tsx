import Header from "../components/Header";
import styles from "../styles/page/getpass.module.css";
import eve from "../assets/images/eventCard.png";
const GetPass: React.FC = () => {
  const getPass: { name: string; desc: string }[] = [
    {
      name: "Day 1",
      desc: "Greatest Pass",
    },
    {
      name: "Day 2",
      desc: "Greatest Pass",
    },
    {
      name: "Elite",
      desc: "Greatest Pass",
    },
    {
      name: "Workshops",
      desc: "Greatest Pass",
    },
  ];
  return (
    <>
      <Header />
      <div className={styles.body}>
        <div className={styles.container}>
          <h1>Get Passes</h1>
          <br />
          <div className={styles.detail}>
            {getPass.map((data, index) => (
              <div className={styles.detailContainer} key={index}>
                <img src={eve} alt="~" className={styles.img} />
                <h4 className={styles.title}>{data.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GetPass;
