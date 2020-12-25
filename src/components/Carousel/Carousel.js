import React, { useState } from "react";
import styles from "./Carousel.module.scss";

export default function Carousel({ children }) {
  const [select, setSelect] = useState(1);
  return (
    <>
      <div className={styles.carousel}>
        <div className={`${styles.slide} ${select === 2 ? styles.active : ""}`}>
          <div className={`${styles.item} item1`}>{children[0]}</div>
          <div className={`${styles.item} item2`}>{children[1]}</div>
        </div>
      </div>
      <button onClick={() => setSelect(1)} className={`${styles.buttonLeft}`} >
        <i className="fas fa-arrow-left"></i>
      </button>
      <button onClick={() => setSelect(2)} className={styles.buttonRight}>
        <i className="fas fa-arrow-right"></i>
      </button>
    </>
  );
}
