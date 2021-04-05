import * as React from "react";
import Layout from "../components/layout";
import CardGrid from "../components/cardGrid.js"
import "./style.css";
import Footer from "../components/footer";

const FlipPage = () => {
  const random1 = [
    {
      image: "flower.jpeg",
      easing: "easing1",
    },
    {
      image: "flower.jpeg",
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
    {
      image: "flower.jpeg",
      easing: "easing5",
    },
    {
      image: "flower.jpeg",
      easing: "easing6",
    },
  ];
  const random2 = [
    {
      image: "flower.jpeg",
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
      easing: "easing5",
    },
    {
      image: "flower.png",
      easing: "easing6",
    },
  ];
  const random3 = [
    {
      image: "flower.jpeg",
      easing: "easing6",
    },
    {
      image: "flower.jpeg",
      easing: "easing3",
    },
    {
      image: "flower.jpeg",
      easing: "easing4",
    },
    {
      image: "flower.jpeg",
      easing: "easing2",
    },
    {
      image: "flower.jpeg",
      easing: "easing1",
    },
    {
      image: "flower.jpeg",
      easing: "easing5",
    },
  ];
  const random4 = [
    {
      image: "flower.jpeg",
      easing: "easing4",
    },
    {
      image: "flower.jpeg",
      easing: "easing6",
    },
    {
      image: "flower.jpeg",
      easing: "easing2",
    },
    {
      image: "flower.jpeg",
      easing: "easing1",
    },
    {
      image: "flower.jpeg",
      easing: "easing3",
    },
    {
      image: "flower.jpeg",
      easing: "easing5",
    },
  ];
  return (
    <Layout>
      <CardGrid order={random1} animationStyle={"flip"}/>
      <Footer round={"4"} nextPage={"/"}/>
    </Layout>
  );
};

export default FlipPage;
