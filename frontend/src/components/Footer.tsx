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
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoMail,
  IoCall,
  IoLocation,
} from "react-icons/io5";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.svceContainer}>
        <img src={svce} alt="SVCE" className={styles.img} />
        <h2>A National Level Technical Fest</h2>
        <IoCall className={styles.footerLogo} />
        <IoLocation className={styles.footerLogo} />
        <IoLogoFacebook className={styles.footerLogo} />
        <IoLogoInstagram className={styles.footerLogo} />
        <IoMail className={styles.footerLogo} />
      </div>
      <div className={styles.menuContactsDiv}>
        <section className={styles.menu}>
          <h2>Menu</h2>
          <br />
          <p>Home</p>
          <br />
          <p>About</p>
          <br />
          <p>Events</p>
          <br />
          <p>Get Passes</p>
          <br />
          <p>Workshops</p>
          <br />
          <p>Proshows</p>
          <br />
          <p>Location</p>
        </section>
        <section className={styles.contacts}>
          <h2>Contact us</h2>
          <br />
          <p>
            <IoMail className={styles.contactLogo} />
            Mail: xyz.svce.ac.in
          </p>
          <br />
          <p>
            <IoCall className={styles.contactLogo} />
            Number: 99999 99999
          </p>
          <br />
          <p className={styles.addressPara}>
            <IoLocation className={styles.contactLogo} />
            Address: Sri Venkateswara College of Enginnering, Post Bag No.1,
            Pennalur Village Chennai - Bangaluru High Road Sriperumbudur Tk,
            Tamil Nadu 602117
          </p>
          <br />
        </section>
      </div>
    </div>
  );
};

export default Footer;
