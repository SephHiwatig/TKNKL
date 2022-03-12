import React from "react";
import styles from "./TattooPortfolio.module.css";
import Gallery from "react-grid-gallery";

function TattooPortfolio(props) {
  console.log(props.imgs);
  return (
    <div className={styles.Wrapper}>
      <div className={styles.GalleryWrapper}>
        <Gallery images={props.imgs} />
      </div>
    </div>
  );
}

export default TattooPortfolio;
