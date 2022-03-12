import { React } from "react";
import styles from "./Nav.module.css";
import logo from "./../../assets/logo_2.jpg";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className={styles.Navbar}>
      <div className={styles.LogoWrapper}>
        <Link to="/">
          <img className={styles.Logo} src={logo} alt="logo" />
        </Link>
      </div>
      <ul className={styles.ListItemWrapper}>
        <Link className={styles.ListItem} to="TattooPortfolio">
          <li>Tattoos</li>
        </Link>
        <Link className={styles.ListItem} to="Arts">
          <li>Arts</li>
        </Link>
        <Link className={styles.ListItem} to="Booking">
          <li>Booking</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
