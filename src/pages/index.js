import * as React from "react";
import { useState } from "react";
import Layout from "../components/layout";
import Grid from "@material-ui/core/Grid";
import Card1 from "../components/card.js";
import CardDetail from "../components/cardDetail.js";
import "./style.css";

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Layout>
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid onClick={toggle} item xs={6}>
          <Card1 title="Icon" imageSource={require("../images/flower.jpeg")} />
        </Grid>
        <Grid item xs={6}>
          <Card1 title="Icon" imageSource={require("../images/icon.png")} />
        </Grid>
        <Grid item xs={6}>
          <Card1 title="Icon" imageSource={require("../images/icon.png")} />
        </Grid>
        <Grid item xs={6}>
          <Card1 title="Icon" imageSource={require("../images/flower.jpeg")} />
        </Grid>
      </Grid>
      <div className={`menu ${isOpen ? "active" : "inactive"}`}>
        <CardDetail />
      </div>
    </Layout>
  );
};

export default IndexPage;
