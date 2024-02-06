import Header from "../components/Header";
import styles from "../styles/page/eventInfo.module.css";
import calIcon from "../assets/images/icons/calIcon.png";
import timeIcon from "../assets/images/icons/timeIcon.png";
import userIcon from "../assets/images/icons/userIcon.png";
import classIcon from "../assets/images/icons/classroomIcon.png";

const EventInfo: React.FC = () => {
  interface locStruct {
    info: string;
    logo: string;
  }

  const details: locStruct[] = [
    { info: "March 12 2024", logo: calIcon },
    { info: "9:00 - 11:00 AM", logo: timeIcon },
    { info: "Classroom : 301", logo: classIcon },
    { info: "Team Size : 3", logo: userIcon },
  ];

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {/* <img src={eventCard} alt="eventCard" className={styles.img} /> */}
          <div className={styles.contextContainer}>
            <h2>Event - 1 Name</h2>
            <p>By Association Of Information Technologists</p>
            <div className={styles.details}>
              {/* <h3><img src={calIcon} alt="~" width={'19vw'} height={'19vh'} /> </h3>
                            <h3>9:00 - 11:00 AM</h3>
                            <h3>Class room : 301</h3>
                            <h3>Team Size : 3</h3> */}
              {details.map((data, index) => (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  key={index}
                >
                  <img src={data.logo} alt="~" width={"19vw"} height={"19vh"} />
                  <h3>{data.info}</h3>
                </div>
              ))}
            </div>
            <h2>Description</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              aspernatur totam maxime, quos molestiae rem corporis fugit modi
              doloremque. Perspiciatis voluptatum ipsa ratione modi dignissimos
              aspernatur iure ab velit libero repellat! Ad molestias commodi
              quis tenetur quod nulla vero, nesciunt blanditiis illum voluptatum
              excepturi earum officia reprehenderit vel minima nihil!
            </p>
            <br />
            <h2>Rules</h2>
            <ul>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, aliquid!
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum,
                iste.
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
                odio.
              </li>
            </ul>
            <br />
            <h2>Event Coordinator</h2>
            <p>Name 1 9898989898</p>
            <p>Name 2 9898989898</p>
            <p>Name 3 9898989898</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventInfo;
