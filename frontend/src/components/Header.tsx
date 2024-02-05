import styles from "../styles/components/header.module.css";
import logo from "../assets/images/festXsvce_logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    // <div className={styles.body}>
    <div className={styles.container}>
      <>
        <img src={logo} alt="Tech Fest" className={styles.logo} />
      </>
      <nav>
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
    // </div>
  );
}

export default Header;
