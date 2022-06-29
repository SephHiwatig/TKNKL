import React from "react";
import styles from "./TattooPortfolio.module.css";
import Gallery from "react-grid-gallery";
import Footer from "../Footer/Footer";

function TattooPortfolio(props) {
  return (
    <div>
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
          <Gallery images={props.imgs} enableImageSelection={false} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TattooPortfolio;
