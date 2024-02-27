import Header from "../components/Header";
import styles from "../styles/page/eventInfo.module.css";
import calIcon from "../assets/images/icons/calIcon.png";
import timeIcon from "../assets/images/icons/timeIcon.png";
import userIcon from "../assets/images/icons/userIcon.png";
import classIcon from "../assets/images/icons/classroomIcon.png";
import eventsData from "../data/eventsData";
import { Link, useParams } from "react-router-dom";

const EventInfo: React.FC = () => {
  const { department, eventId } = useParams();
  var event: {
    name: string;
    date: string;
    time: string;
    venue: string;
    team: string;
    description: string[];
    rules: string[];
    requirements: string[];
    coordinators: { name: string; contact: string };
  } = {
    name: "",
    date: "",
    time: "",
    venue: "",
    team: "",
    description: [],
    rules: [],
    requirements: [],
    coordinators: { name: "", contact: "" },
  };

  eventsData.map((dep) => {
    if (dep.id === department && eventId !== undefined) {
      event = dep.events[parseInt(eventId)];
    }
  });

  const details: {
    logo: string;
  }[] = [
    { logo: calIcon },
    { logo: timeIcon },
    { logo: classIcon },
    { logo: userIcon },
  ];

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.wrapper}>
            <h1 style={{textAlign:'center',paddingBottom:'30px'}}>{event.name}</h1>
          <div className={styles.contextContainer}>
            <p></p>
            <div className={styles.details}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img src={calIcon} alt="~" width={"18vw"} height={"19vh"} />
                <h3>{event.date}</h3>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img src={timeIcon} alt="~" width={"18vw"} height={"19vh"} />
                <h3>{event.time}</h3>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img src={classIcon} alt="~" width={"18vw"} height={"19vh"} />
                <h3>{event.venue}</h3>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img src={userIcon} alt="~" width={"18vw"} height={"19vh"} />
                <h3>{event.team}</h3>
              </div>
            </div>
            <h2>Description</h2>
            {event.description.map((des) => (
              <p>{des}</p>
            ))}

            <br />
            <h2>Rules</h2>
            <ul>
              {event.rules.map((rule) => (
                <li>{rule}</li>
              ))}
            </ul>

            <Link to="/">
              <button className={styles.getPass}>Get Pass</button>
            </Link>
            <br />
            <h2>Event Coordinator</h2>
            <p>{`${event.coordinators.name}  ${event.coordinators.contact}`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventInfo;
