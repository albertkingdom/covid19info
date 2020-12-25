import React from "react";
import Col from "react-bootstrap/Col";
import CountUp from "react-countup";

import styles from "./Cards.module.scss";

export default function Card({ country, data, title }) {
  return (
    <Col md={12}>
      <div className={styles.infoCard}>
        <h5 className="">
          {country && country !== "Global" ? country : "全球"}
          {title}
        </h5>
        <div className={styles.digit}>
          {data && <CountUp start={0} end={data.value} separator="," />}
        </div>
      </div>
    </Col>
  );
}
