import { React, useState } from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {

  const [burgerOpen, toggleBurger] = useState(false);

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
        <button className={styles.BtnBurger} onClick={() => toggleBurger(!burgerOpen)}>
          <GiHamburgerMenu />
        </button>
        {burgerOpen &&
          <ul className={styles.BurgerDropdown}>
            <Link className={styles.BurgerDropdownItem} to="TattooPortfolio"
              onClick={() => {
                window.scrollTo({top: 0, behavior: "smooth"})
                toggleBurger(!burgerOpen)
                }}>Tattoos</Link>
            <Link className={styles.BurgerDropdownItem} to="Arts"
              onClick={() => {
                window.scrollTo({top: 0, behavior: "smooth"})
                toggleBurger(!burgerOpen)
                }}>Arts</Link>
            <Link className={styles.BurgerDropdownItem} to="Booking"
              onClick={() => {
                window.scrollTo({top: 0, behavior: "smooth"})
                toggleBurger(!burgerOpen)
                }}>Booking</Link>
          </ul>
        }
      </div>
    </div>
  );
}

export default Nav;
