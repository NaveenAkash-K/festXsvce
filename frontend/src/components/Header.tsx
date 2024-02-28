import styles from "../styles/components/header.module.css";
import logo from "../assets/images/festXsvce_logo.png";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
// import { Link } from "react-scroll";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

function Header() {
  // const localData = localStorage.getItem("user");
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  // var user;

  const location = useLocation();
  const currentPath = location.pathname;

  // if (localData !== null) {
  //   user = JSON.parse(localData);
  // }
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const navItemHandle = (str:string) => {
    if (currentPath !== "/") {
      // navigate("/");
      window.location.href = `http://localhost:3000/#${str}`
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
          {/* <Link
            className={styles.mobileLink}
            to={"/home"}
            onClick={navItemHandle}
          >
            Home
          </Link>
          <Link
            className={styles.mobileLink}
            to={"/about"}
            onClick={navItemHandle}
            offset={80}
          >
            About
          </Link>
          <Link
            className={styles.mobileLink}
            to={"/departments"}
            onClick={navItemHandle}
          >
            Events
          </Link>
          <Link
            className={styles.mobileLink}
            to={"/passes"}
            onClick={() => {
              navigate("/getPass");
            }}
          >
            Get Passes
          </Link>
          <Link
            className={styles.mobileLink}
            to={"/sponsors"}
            onClick={navItemHandle}
          >
            Sponsers
          </Link>
          <Link
            className={styles.mobileLink}
            to={"/location"}
            onClick={navItemHandle}
          >
            Location
          </Link> */}
          <NavLink
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
          >
            About
          </NavLink>
          <NavLink
            to={"/departments"}
          >
            Events
          </NavLink>
          <NavLink
            to={"/getPass"}
          >
            Get Passes
          </NavLink>
          <NavLink
            to={"/workshops"}
          >
            Workshops
          </NavLink>
          <NavLink
            to={"/proshows"}
          >
            Proshows
          </NavLink>
          <NavLink
            to={"/sponsors"}
          >
            Sponsers
          </NavLink>
          <NavLink
            to={"/location"}
          >
            Location
          </NavLink>
          
        </nav>
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
          <NavLink
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
          >
            About
          </NavLink>
          <NavLink
            to={"/departments"}
          >
            Events
          </NavLink>
          <NavLink
            to={"/getPass"}
          >
            Get Passes
          </NavLink>
          <NavLink
            to={"/workshops"}
          >
            Workshops
          </NavLink>
          <NavLink
            to={"/proshows"}
          >
            Proshows
          </NavLink>
          <NavLink
            to={"/sponsors"}
          >
            Sponsers
          </NavLink>
          <NavLink
            to={"/location"}
          >
            Location
          </NavLink>
          {/* <a href="/#home" className={styles.mobileLink}>
            Home
          </a>
          <p onClick={navItemHandle}  className={styles.mobileLink}>Events</p>
          <p onClick={navItemHandle}  className={styles.mobileLink}>About</p>
          <p onClick={navItemHandle}  className="">Get Passes</p>
          <p onClick={navItemHandle}  className={styles.mobileLink}>Sponsers</p>
          <p onClick={navItemHandle}  className={styles.mobileLink}>Location</p> */}
        </nav>
      </div>
    </>
  );
}

export default Header;
