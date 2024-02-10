import styles from "../styles/page/events.module.css";
import eve from "../assets/images/eventCard.png";
import Header from "../components/Header";
import eventsData from "../data/eventsData";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

const Events: React.FC = () => {
  const { department } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className={styles.body}>
        <div className={styles.container}>
          <h1>Explore</h1>
          <br />
          <div className={styles.list}>
            {eventsData.flatMap((data) => {
              if (data.id === department) {
                return data.events.map((event, index) => (
                  <div
                    key={event.name}
                    className={styles.cardContainer}
                    onClick={() => {
                      navigate(`./${index}`);
                    }}
                  >
                    <img src={eve} alt="asda" className={styles.img} />
                    <h4 className={styles.title}>{event.name}</h4>
                    <h4 className={styles.know}>Know More</h4>
                  </div>
                ));
              }
              return [];
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
