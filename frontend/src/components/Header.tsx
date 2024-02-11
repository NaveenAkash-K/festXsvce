import styles from "../styles/components/header.module.css";
import logo from "../assets/images/festXsvce_logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

function Header() {
  const localData = localStorage.getItem("user");
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  var user;

  const location = useLocation();
  const currentPath = location.pathname;

  if (localData !== null) {
    user = JSON.parse(localData);
  }
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const navItemHandle = () => {
    if (currentPath !== "/") {
      navigate("/");
    }
    setIsNavOpen(false);
  };

  return (
    <>
      <div
        className={`${styles.navMobile} ${
          isNavOpen ? styles.open : styles.hide
        }`}
      >
        {/* <section> */}
        <IoClose
          className={styles.close}
          onClick={() => {
            setIsNavOpen(false);
          }}
        />
        {/* </section> */}
        <nav>
          <Link
            className={styles.mobileLink}
            to={"home"}
            smooth={true}
            duration={700}
            onClick={navItemHandle}
          >
            Home
          </Link>
          <Link
            className={styles.mobileLink}
            to={"about"}
            smooth={true}
            duration={700}
            onClick={navItemHandle}
            offset={80}
          >
            About
          </Link>
          <Link
            className={styles.mobileLink}
            to={"departments"}
            smooth={true}
            duration={700}
            onClick={navItemHandle}
          >
            Events
          </Link>
          <Link
            className={styles.mobileLink}
            to={"passes"}
            smooth={true}
            duration={700}
            onClick={navItemHandle}
          >
            Get Passes
          </Link>
          <Link
            className={styles.mobileLink}
            to={"sponsers"}
            smooth={true}
            duration={700}
            onClick={navItemHandle}
          >
            Sponsers
          </Link>
          <Link
            className={styles.mobileLink}
            to={"location"}
            smooth={true}
            duration={700}
            onClick={navItemHandle}
          >
            Location
          </Link>
        </nav>
        <section>
          <br />
          {localData !== null ? <p>{user.username}</p> : null}
          <br />
          {localData !== null ? <p onClick={logout}>Logout</p> : null}
          <br />
          {localData === null ? (
            <p
              onClick={() => {
                setIsNavOpen(false);
                navigate("/login");
              }}
            >
              Signup
            </p>
          ) : null}
          <br />
        </section>
      </div>

      <div className={styles.container}>
        <img src={logo} alt="Tech Fest" className={styles.logo} />
        <IoMenu
          className={styles.menu}
          onClick={() => {
            setIsNavOpen(true);
          }}
        />
        <nav className={styles.navDesktop}>
          <Link
            to={"home"}
            smooth={true}
            duration={700}
            onClick={navItemHandle}
          >
            Home
          </Link>
          <Link
            to={"about"}
            smooth={true}
            duration={700}
            onClick={navItemHandle}
            offset={80}
          >
            About
          </Link>
          <Link
            to={"departments"}
            smooth={true}
            duration={700}
            onClick={navItemHandle}
          >
            Events
          </Link>
          <Link
            to={"passes"}
            smooth={true}
            duration={700}
            onClick={navItemHandle}
          >
            Get Passes
          </Link>
          <Link
            to={"sponsers"}
            smooth={true}
            duration={700}
            onClick={navItemHandle}
          >
            Sponsers
          </Link>
          <Link
            to={"location"}
            smooth={true}
            duration={700}
            onClick={navItemHandle}
          >
            Location
          </Link>
          <hr style={{ transform: "rotate(180deg)" }} />
          {localData !== null ? (
            <p style={{ color: "white" }}>{user.username}</p>
          ) : null}
          {localData !== null ? (
            <p style={{ color: "white" }} onClick={logout}>
              Logout
            </p>
          ) : null}
          {localData === null ? (
            <p
              style={{ color: "white" }}
              onClick={() => {
                navigate("/login");
              }}
            >
              Signup
            </p>
          ) : null}
        </nav>
      </div>
    </>
  );
}

export default Header;
