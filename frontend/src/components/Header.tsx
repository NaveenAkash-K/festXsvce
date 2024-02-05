import styles from "../styles/components/header.module.css";
import logo from "../assets/images/festXsvce_logo.png";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

function Header() {
  return (
    <>
      <div className={styles.navMobile}>
        {/* <section> */}
        <IoClose className={styles.close} />
        {/* </section> */}
        <nav>
          <Link className={styles.mobileLink} to={"/"}>
            Home
          </Link>
          <Link className={styles.mobileLink} to={"/about"}>
            About
          </Link>
          <Link className={styles.mobileLink} to={"/departments"}>
            Events
          </Link>
          <Link className={styles.mobileLink} to={"/"}>
            Get
          </Link>
          <Link className={styles.mobileLink} to={"/"}>
            Workshops
          </Link>
          <Link className={styles.mobileLink} to={"/"}>
            Proshows
          </Link>
          <Link className={styles.mobileLink} to={"/"}>
            Sponsors
          </Link>
          <Link className={styles.mobileLink} to={"/location"}>
            Location
          </Link>
          <Link className={styles.mobileLink} to={"/"}>
            Contact
          </Link>
        </nav>
      </div>
      <div className={styles.container}>
        <img src={logo} alt="Tech Fest" className={styles.logo} />
        <IoMenu className={styles.menu} />
        <nav className={styles.navDesktop}>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/departments"}>Events</Link>
          <Link to={"/"}>Get</Link>
          <Link to={"/"}>Workshops</Link>
          <Link to={"/"}>Proshows</Link>
          <Link to={"/"}>Sponsors</Link>
          <Link to={"/location"}>Location</Link>
          <Link to={"/"}>Contact</Link>
        </nav>
      </div>
    </>
  );
}

export default Header;
