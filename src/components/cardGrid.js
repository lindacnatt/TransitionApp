import * as React from "react";
import { useState } from "react";
import Layout from "../components/layout";
import Grid from "@material-ui/core/Grid";
import Card1 from "../components/card.js";
import CardDetail from "../components/cardDetail.js";
import "../pages/style.css";

const CardGrid = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [easingClass, setEasingClass] = useState("");
  const handleClickOnCard = (easingType) => {
    setEasingClass(easingType);
    setIsOpen(!isOpen);
  };
  return (
    <Grid container spacing={2} justify="center" alignItems="center">
      {props.order.map((item) => (
        <Grid onClick={() => handleClickOnCard(item.easing)} item xs={6}>
          <Card1
            title="Icon"
            imageSource={require("../images/" + item.image)}
          />
        </Grid>
      ))}
      <div className={`menu ${isOpen ? "active" : "inactive"} ${easingClass} ${props.animationStyle}`}>
      {/*
       {`menu ${isOpen ? "active" : "inactive"} ${easingClass}`}
      {`menuFade ${isOpen ? "in" : " "} ${easingClass}`} */}
        <CardDetail close={handleClickOnCard}/>
      </div>
    </Grid>
  );
};

export default CardGrid;
