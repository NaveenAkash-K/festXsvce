import { useEffect } from "react";
import { useParams } from "react-router";
import workshopData from "../data/workshopData";
import styles from "../styles/components/workshopitem.module.css";
import Header from "./Header";
import calIcon from "../assets/images/icons/calIcon.png";
import timeIcon from "../assets/images/icons/timeIcon.png";
import classIcon from "../assets/images/icons/classroomIcon.png";

const WorkshopItem: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { workId } = useParams();

  var work = workshopData.find((ele) => {
    return ele.id.toString() === workId;
  });
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 style={{ textAlign: "center", paddingBottom: "30px" }}>
            {work?.name}
          </h1>
          {/* <div className={styles.scrollingText}>
            <p>By {workshopData.filter((ele) => ele.name == workId)[0].dept}</p>
            <br />
          </div> */}
          <div className={styles.contextContainer}>
            <p></p>
            <div className={styles.details}>
              <div
                className={styles.text}
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img src={calIcon} alt="~" width={"18vw"} height={"19vh"} />
                <h3>{work!.day}</h3>
              </div>
              <div
                className={styles.text}
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img src={timeIcon} alt="~" width={"18vw"} height={"19vh"} />
                <h3>{work!.duration}</h3>
              </div>
              <div
                className={styles.text}
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img src={classIcon} alt="~" width={"18vw"} height={"19vh"} />
                <h3>{work!.venue}</h3>
              </div>
              {/* <div
                className={styles.text}
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                <img src={userIcon} alt="~" width={"18vw"} height={"19vh"} />
                <h3>{workshop.team}</h3>
              </div> */}
            </div>
            <h2>Description</h2>
            {work!.desc.map((data, index) => (
              <ul>
                <li key={index}>{data}</li>
              </ul>
            ))}
            <br />
            {work!.req[0] !== "Nill" && (
              <>
                <h2>Requirements</h2>
                <ul>
                  {work!.req.map((rule, index) => (
                    <li key={index}>{rule}</li>
                  ))}
                </ul>
              </>
            )}
            <br />
            <h2>Event Coordinator</h2>
            <p>{`${work?.coord}`}</p>
            <p>{`${work?.ph}`}</p>
            <a href={work!.link.toString()}>
              <button className={styles.getPass}>Register Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default WorkshopItem;
