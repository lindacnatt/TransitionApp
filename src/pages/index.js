import * as React from "react";
import { useState } from "react";
import Layout from "../components/layout";
import Grid from "@material-ui/core/Grid";
import Card1 from "../components/card.js";
import CardDetail from "../components/cardDetail.js";
import "./style.css";

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [easingClass, setEasingClass] = useState("");
  const handleClickOnCard = (easingType) => {
    setEasingClass(easingType);
    setIsOpen(!isOpen);
   };

  const random = [
    {
      image: "flower.jpeg",
      easing: "easing1",
    },
    {
      image: "icon.png",
      easing: "easing2",
    },
    {
      image: "flower.jpeg",
      easing: "easing3",
    },
    {
      image: "flower.jpeg",
      easing: "easing4",
    },
  ];
  return (
    <Layout>
      <Grid container spacing={2} justify="center" alignItems="center">
        {random.map((item) => (
          <Grid onClick={ () => handleClickOnCard(item.easing) } item xs={6}>
            <Card1
              title="Icon"
              imageSource={require("../images/" + item.image)}
            />
          </Grid>
        ))}
      </Grid>
      <div className={`menu ${isOpen ? "active" : "inactive"} ${easingClass}`}>
        <CardDetail />
      </div>
    </Layout>
  );
};

export default IndexPage;
