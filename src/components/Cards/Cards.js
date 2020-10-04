import React from "react";
// import { Card, CardContent, Typography } from "@material-ui/core";
import styles from "./Cards.module.scss";
// import "./Cards.scss";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CountUp from "react-countup";
const Cards = (props) => {
  // console.log("cards props", props);

  const date = new Date(props.data.lastUpdate); //更新時間
  const display = (
    <Container className={styles.cardContainer}>
      <Row>
        <Col md={4}>
          <div className={styles.infoCard} data-test="casesCount">
            <h5 className="">
              {props.country && props.country !== "Global"
                ? props.country
                : "全球"}
              確診人數
            </h5>
            <div className={styles.digit}>
              <CountUp
                start={0}
                end={props.data.confirmed.value}
                separator=","
              />
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className={styles.infoCard} data-test="casesCount">
            <h5 className="">
              {props.country && props.country !== "Global"
                ? props.country
                : "全球"}
              復原人數
            </h5>
            <div className={styles.digit}>
              <CountUp
                start={0}
                end={props.data.recovered.value}
                separator=","
              />
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className={styles.infoCard} data-test="casesCount">
            <h5 className="">
              {props.country && props.country !== "Global"
                ? props.country
                : "全球"}
              死亡人數
            </h5>
            <div className={styles.digit}>
              <CountUp start={0} end={props.data.deaths.value} separator="," />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
  return display;
};

export default Cards;
