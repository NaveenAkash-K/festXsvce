import styles from "../styles/components/header.module.css";
import logo from "../assets/images/festXsvce_logo.png";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  // var user;

  const location = useLocation();
  const currentPath = location.pathname;
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
        <IoClose
          className={styles.close}
          onClick={() => {
            setIsNavOpen(false);
          }}
        />
        <nav>
          <NavLink
            to={"/"}
            className={({isActive})=>isActive ? styles.active : styles.inactive}
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({isActive})=>isActive ? styles.active : styles.inactive}
          >
            About
          </NavLink>
          <NavLink
            to={"/departments"}
            className={({isActive})=>isActive ? styles.active : styles.inactive}
          >
            Events
          </NavLink>
          <NavLink
            to={"/getPass"}
            className={({isActive})=>isActive ? styles.active : styles.inactive}
          >
            Get Passes
          </NavLink>
          <NavLink
            to={"/workshops"}
            className={({isActive})=>isActive ? styles.active : styles.inactive}
          >
            Workshops
          </NavLink>
          <NavLink
            to={"/proshows"}
            className={({isActive})=>isActive ? styles.active : styles.inactive}
          >
            Proshows
          </NavLink>
          <NavLink
            to={"/sponsors"}
            className={({isActive})=>isActive ? styles.active : styles.inactive}
          >
            Sponsors
          </NavLink>
          <NavLink
            to={"/location"}
            className={({isActive})=>isActive ? styles.active : styles.inactive}
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
            className={({isActive})=>isActive ? styles.active : styles.inactive}
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({isActive})=>isActive ? styles.active : styles.inactive}
          >
            About
          </NavLink>
          <NavLink
            to={"/departments"}
            className={({isActive})=>isActive ? styles.active : styles.inactive}
          >
            Events
          </NavLink>
          <NavLink
            to={"/getPass"}
            className={({isActive})=>isActive ? styles.active : styles.inactive}
          >
            Get Passes
          </NavLink>
          <NavLink
            to={"/workshops"}
            className={({isActive})=>isActive ? styles.active : styles.inactive}
          >
            Workshops
          </NavLink>
          <NavLink
            to={"/proshows"}
            className={({isActive})=>isActive ? styles.active : styles.inactive}
          >
            Proshows
          </NavLink>
          <NavLink
            to={"/sponsors"}
            className={({isActive})=>isActive ? styles.active : styles.inactive}
          >
            Sponsors
          </NavLink>
          <NavLink
            to={"/location"}
            className={({isActive})=>isActive ? styles.active : styles.inactive}
          >
            Location
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default Header;
