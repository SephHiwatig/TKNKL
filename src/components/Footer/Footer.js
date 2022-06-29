import React, { useState, useEffect } from "react";
import styles from "./Footer.module.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import shopTemplate from "./../../assets/shop_template.jpg";
import tknkl from "./../../assets/tknkl_white.jpg";
import { Link } from "react-router-dom";

function Footer(props) {
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
    <div className={props.home ? styles.WrapperHome : styles.Wrapper}>
      <div className={styles.ShopName}>
        {/* <h1>
          <img className={styles.Shop} src={shopTemplate} alt="logo" />
        </h1> */}
        <h1>
          {/* <img className={styles.Title} src={tknkl} alt="logo" />
           */}
          <Link to="" className={styles.TknklLink} onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}}>
            <h1>TKNKL</h1>
          </Link>
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
