import * as React from "react";
import { useState } from "react";
import Layout from "../components/layout";
import Card from "../components/card2.js";
import Grid from "@material-ui/core/Grid";
import { css } from "@emotion/core";
import Card1 from "../components/card.js";
import CardDetail from "../components/cardDetail.js";
import styled from "@emotion/styled";
import "./style.css";
// markup

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  var Image = {

  }
  return (
    <Layout>
      {/*       <h1
        css={css`
          padding-bottom: 30px;
        `}
        onClick={toggle}
      >
        Click here
      </h1> */}
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid onClick={toggle} item xs={6}>
          <Card1 title="Icon" imageSource={require('../images/icon.png')}/>
        </Grid>
        <Grid item xs={6}>
          <Card1 title="Icon" imageSource={require('../images/icon.png')}/>
        </Grid>
        <Grid item xs={6}>
          <Card1 title="Icon" imageSource={require('../images/icon.png')}/>
        </Grid>
        <Grid item xs={6}>
          <Card1 title="Icon" imageSource={require('../images/flower.jpeg')}/>
        </Grid>
{/*         <Grid item xs={6}>
          <Card1 />
        </Grid>
        <Grid item xs={6}>
          <Card1 />
        </Grid> */}
        <div className={`menu ${isOpen ? "active" : "inactive"}`}>
          <CardDetail />
        </div> 
      </Grid>
    </Layout>
  );
};

export default IndexPage;
