import * as React from "react";
import { useState } from "react";
import Layout from "../components/layout";
import CardGrid from "../components/cardGrid.js"
import "./style.css";
import Footer from "../components/footer";

const FadePage = () => {
  const random1 = [
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
  const random2 = [
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
      easing: "easing1",
    },
    {
      image: "flower.jpeg",
      easing: "easing4",
    },
  ];
  return (
    <Layout>
      <CardGrid order={random1} animationStyle={"fade"}/>
      <Footer round={"2"} nextPage={"/expand"}/>
    </Layout>
  );
};

export default FadePage;
