import { React } from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {

  return (
    <div className={styles.Navbar}>
      <ul className={styles.ListItemWrapper}>
        <Link className={styles.ListItem} to="TattooPortfolio"
          onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}}>
          <li>Tattoos</li>
        </Link>
        <Link className={styles.ListItem} to="Arts"
          onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}}>
          <li>Arts</li>
        </Link>
        <Link className={styles.ListItem} to="Booking"
          onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}}>
          <li>Booking</li>
        </Link>
      </ul>
      <div className={styles.BurgerWrapper}>
        <button className={styles.BtnBurger}>
          <GiHamburgerMenu />
        </button>
      </div>
    </div>
  );
}

export default Nav;
