import React from "react";
import styles from "./TattooPortfolio.module.css";
import Gallery from "react-grid-gallery";

function TattooPortfolio(props) {
  return (
    <div className={styles.Wrapper}>
      <div
        style={{
          display: "block",
          minHeight: "1px",
          width: "100%",
          overflow: "hidden",
          textAlign: "center",
          background: "white",
        }}
      >
        <h1>{props.title}</h1>
        <Gallery images={props.imgs} enableImageSelection={false} />
      </div>
    </div>
  );
}

export default TattooPortfolio;
