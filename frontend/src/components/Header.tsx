import styles from "../styles/components/header.module.css";
import logo from "../assets/images/festXsvce_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { IoMenu, IoClose, IoChevronDownOutline } from "react-icons/io5";

function Header() {
  const localData = localStorage.getItem("user");
  var user;

  if (localData !== null) {
    user = JSON.parse(localData);
  }
  const navigate = useNavigate();
  const revealLogout = () => {};

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
          <Link to={"/location"}>Location</Link>
          <Link to={"/"}>Contact</Link>
        </nav>
        {localData !== null ? (
          <>
            <p style={{ color: "white" }}>Logout</p>
            <p style={{ color: "white" }}>{user.username}</p>
          </>
        ) : (
          <p style={{ color: "white" }}>Signin</p>
        )}
      </div>
    </>
  );
}

export default Header;
