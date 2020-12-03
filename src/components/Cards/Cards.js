import React from "react";
// import { Card, CardContent, Typography } from "@material-ui/core";
import styles from "./Cards.module.scss";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "./Card";

import PropTypes from "prop-types";

const Cards = (props) => {
  // console.log("cards props", props);

  const date = new Date(props.data.lastUpdate); //更新時間
  const display = (
    <Container className={styles.cardContainer}>
      <Row>
        <Card
          column={4}
          country={props.country}
          data={props.data.confirmed}
          title="確診人數"
        />

        <Card
          column={4}
          country={props.country}
          data={props.data.recovered}
          title="復原人數"
        />

        <Card
          column={4}
          country={props.country}
          data={props.data.deaths}
          title="死亡人數"
        />
      </Row>
    </Container>
  );
  return display;
};
//props型別檢查
Cards.propTypes = {
  country: PropTypes.string,
  data: PropTypes.shape({
    confirmed: PropTypes.object,
    deaths: PropTypes.object,
    recovered: PropTypes.object,
  }),
};
export default Cards;
