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
const Cards = props => {
  console.log("cards", props.data);
  // const { confirmed, recovered } = data;
  // console.log("data.confirmed", data.confirmed);
  // console.log(recovered);
  const date = new Date(props.data.lastUpdate);
  const display = (
    <Container className={styles.cardContainer}>
      <Row>
        {/* <div className={styles.bk}>{data.confirmed.value}</div> */}
        {/* {data.map((item,index)=>item.value)} */}
        {/* <div className={styles.bk}>{recovered.value}</div> */}
        <Col md={4}>
          <Card className="text-center my-2">
            <Card.Header>
              {props.country ? props.country : "全球"}確診人數
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <CountUp
                  start={0}
                  end={props.data.confirmed.value}
                  separator=","
                />
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              更新時間:{date.toLocaleString()}
            </Card.Footer>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center my-2">
            <Card.Header>
              {props.country ? props.country : "全球"}復原人數
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <CountUp
                  start={0}
                  end={props.data.recovered.value}
                  separator=","
                />
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              更新時間:{date.toLocaleString()}
            </Card.Footer>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center my-2">
            <Card.Header>
              {props.country ? props.country : "全球"}死亡人數
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <CountUp
                  start={0}
                  end={props.data.deaths.value}
                  separator=","
                />
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              更新時間:{date.toLocaleString()}
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
  return display;
};

export default Cards;
