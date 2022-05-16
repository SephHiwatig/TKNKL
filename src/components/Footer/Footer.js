import React, { useState, useEffect } from "react";
import styles from "./Footer.module.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import shopTemplate from "./../../assets/shop_template.jpg";
import tknkl from "./../../assets/tknkl_white.jpg";

function Footer() {
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(500);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth == 768) {
        setWidth(300);
        setHeight(250);
      } else {
        setWidth(600);
        setHeight(500);
      }
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className={styles.Wrapper}>
      <div className={styles.ShopName}>
        <h1>
          <img className={styles.Shop} src={shopTemplate} alt="logo" />
        </h1>
        <h1>
          <img className={styles.Title} src={tknkl} alt="logo" />
        </h1>
        <h3>4895 Saint-Charles Blvd, Pierrefonds, QC H9H 3E4</h3>
        <div>
          <a href="https://www.facebook.com/tknklarts" target="_blank">
            <BsFacebook className={styles.SocialIcons} />
          </a>
          <a href="https://www.instagram.com/tknklarts/" target="_blank">
            <BsInstagram className={styles.SocialIcons} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
