import styles from "../styles/page/events.module.css";
import eve from "../assets/images/eventCard.png";
import Header from "../components/Header";
// import { useParams } from "react-router";

const Events: React.FC = () => {
  // const { department } = useParams();
  const eventDetail: {
    id: number;
    name: string;
    km: string;
  }[] = [
    { id: 1, name: "Event - 1 Name", km: "#know" },
    { id: 2, name: "Event - 2 Name", km: "#know" },
    { id: 3, name: "Event - 3 Name", km: "#know" },
    { id: 4, name: "Event - 4 Name", km: "#know" },
  ];

  return (
    <>
      <Header />
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.list}>
            {eventDetail.map((data) => (
              <div key={data.id} className={styles.cardContainer}>
                <img src={eve} alt="asda" className={styles.img} />
                <h4 className={styles.title}>{data.name}</h4>
                <h4 className={styles.know}>Know More</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
