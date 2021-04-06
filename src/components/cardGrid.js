import * as React from "react";
import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card1 from "../components/card.js";
import CardDetail from "../components/cardDetail.js";
import "../pages/style.css";

const CardGrid = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [easingClass, setEasingClass] = useState("");
  const [imgClass, setImgClass] = useState("grey");
  const handleClickOnCard = (easingType, backImage) => {
   if (easingType !== undefined){
    setEasingClass(easingType);
    setImgClass(backImage)
   }
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Grid container spacing={2} justify="center" alignItems="center">
        {props.order.map((item, index) => (
          <Grid
            key={index}
            onClick={() => handleClickOnCard(item.easing, item.image)}
            item
            xs={6}
          >
            <Card1
              number={index}
              title="Icon"
              imageSource={require("../images/" + item.image)
              }
            />
          </Grid>
        ))}
      </Grid>
      <div
        className={`menu ${isOpen ? "active" : "inactive"} ${easingClass} ${props.animationStyle}`}
      >
        <CardDetail close={handleClickOnCard} img={imgClass}/>
      </div>
    </div>
  );
};

export default CardGrid;
