import React, { useState, useEffect } from "react";
import styles from "./Footer.module.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";

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
        <h1>TKNKL</h1>
        <h2>Art and Tattoo</h2>
        <h3>4895 Saint-Charles Blvd, Pierrefonds, QC H9H 3E4</h3>
        <h4>(514) xxx-xxxx | Email@gmail.com</h4>
        <div>
          <a href="#">
            <BsFacebook className={styles.SocialIcons} />
          </a>
          <a href="https://www.instagram.com/tknklarts/" target="_blank">
            <BsInstagram className={styles.SocialIcons} />
          </a>
        </div>
      </div>

      <div className={styles.MapWrapper}>
        <div className={styles.mapouter}>
          <div className={styles.gmap_canvas}>
            <iframe
              width={width}
              height={height}
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=4895%20boulevard%20st%20charles&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
            <a href="https://putlocker-is.org">putlocker</a>
            <br />
            <a href="https://www.embedgooglemap.net">
              interactive google maps for website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
