import styles from "../styles/components/footer.module.css";
import svce from "../assets/images/svcelogo.png";
import fb from "../assets/images/icons/Facebook.png";
import insta from "../assets/images/icons/Instagram.png";
import twitter from "../assets/images/icons/Twitter.png";
import linkedIn from "../assets/images/icons/linkedIn.png";
import utube from "../assets/images/icons/utube.png";
import emailIcon from "../assets/images/icons/Email.png";
import locationIcon from "../assets/images/icons/Spacer Icon Wrapper.png";
import callIcon from "../assets/images/icons/Phone.png";

const Footer: React.FC = () => {
  const media: { [key: string]: string }[] = [
    { key: "fb", value: fb },
    { key: "insta", value: insta },
    { key: "twitter", value: twitter },
    { key: "linkedIn", value: linkedIn },
    { key: "utube", value: utube },
  ];
  const menu: { key: string }[] = [
    { key: "Home" },
    { key: "About" },
    { key: "Events" },
    { key: "Get Passes" },
    { key: "Workshops" },
    { key: "Proshows" },
    { key: "Location" },
    { key: "Login" },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.svceContainer}>
          <div className={styles.svce}>
            <img src={svce} alt="SVCE" className={styles.img} width={"50%"} />
            <h3>A National Level Technical Fest</h3>
            {media.map((data) => (
              <img
                className={styles.mediaimage}
                src={data.value}
                alt={data.key}
                style={
                  data.key === "fb"
                    ? { height: "40px" }
                    : data.key === "utube"
                    ? { width: "7%", height: "43%" , marginLeft: "5%" }
                    : { width: "5%", height: "43%", marginLeft: "5%" }
                }
              />
            ))}
          </div>
        </div>
        <div className={styles.menu}>
          <h2>Menu</h2>
          {menu.map((data, index) => (
            <h4 style={{ marginTop: "1%" }} key={index}>
              {data.key}
            </h4>
          ))}
        </div>
        <div className={styles.contact}>
          <h2>Contact Us</h2>
          <div className={styles.connector}>
            <img
              src={emailIcon}
              alt="~"
              width={"5%"}
              style={{ marginRight: "2%" }}
            />
            <p>Mail:xyz@svce.ac.in</p>
          </div>
          <div className={styles.connector}>
            <img
              src={callIcon}
              alt="~"
              width={"5%"}
              style={{ marginRight: "2%" }}
            />
            <p>Number:9999999999</p>
          </div>
          <div>
            <div className={styles.connector}>
              <p>
                <img
                  src={locationIcon}
                  alt="~"
                  width={"12%"}
                  style={{ marginRight: "5%" }}
                />
                Address:
                <br />
              </p>
            </div>
            <p>
              Sri Venkateswara College Of Engineering Post Bag No,1,Pennalur
              Village,Chennai-Bengaluru High Road Sriperumbudur Tk,Tamil Nadu
              602 117
            </p>
          </div>
        </div>
      </div>
      <p className={styles.copyrights}>
        Copyright &copy; 2024 SVCE All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
