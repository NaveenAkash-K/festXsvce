import styles from "../styles/components/header.module.css";
import logo from "../assets/images/techLogo.png";
import svceLogo from "../assets/images/svcelogo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

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
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            About
          </NavLink>
          <NavLink
            to={"/departments"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Events
          </NavLink>
          <a href="https://forms.gle/jLVFdaH8UxdiQeqaA" target="_blank" rel="noreferrer"
            className={ styles.inactive}
          >
            Get Passes
          </a>
          <NavLink
            to={"/workshops"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Workshops
          </NavLink>
          <NavLink
            to={"/proshows"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Proshows
          </NavLink>
          <NavLink
            to={"/sponsors"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Sponsors
          </NavLink>
          <NavLink
            to={"/location"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Location
          </NavLink>
        </nav>
      </div>
      <div className={styles.container}>
        <section>
          <NavLink to={"/"}>
            <img src={logo} alt="Tech Fest" className={styles.logo} />
          </NavLink>
          <img src={svceLogo} alt="Tech Fest" className={styles.svceLogo} />
        </section>
        <IoMenu
          className={styles.menu}
          onClick={() => {
            setIsNavOpen(true);
          }}
        />
        <nav className={styles.navDesktop}>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            About
          </NavLink>
          <NavLink
            to={"/departments"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Events
          </NavLink>
          <a href="https://forms.gle/jLVFdaH8UxdiQeqaA" target="_blank" rel="noreferrer"
            className={ styles.inactive}
          >
            Get Passes
          </a>
          <NavLink
            to={"/workshops"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Workshops
          </NavLink>
          <NavLink
            to={"/proshows"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Proshows
          </NavLink>
          <NavLink
            to={"/sponsors"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Sponsors
          </NavLink>
          <NavLink
            to={"/location"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Location
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default Header;
