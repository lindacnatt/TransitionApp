import * as React from "react";
import { useState } from "react";
import Layout from "../components/layout";
import CardGrid from "../components/cardGrid.js"
import "./style.css";
import Footer from "../components/footer";

const ExpandPage = () => {
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
    {
      image: "flower.jpeg",
      easing: "easing1",
    },
    {
      image: "icon.png",
      easing: "easing4",
    },
  ];
  return (
    <Layout>
      <CardGrid order={random2} animationStyle={"expand"}/>
      <Footer round={"3"} nextPage={"/"}/>
    </Layout>
  );
};

export default ExpandPage;
