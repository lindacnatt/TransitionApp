import * as React from "react";
import { useState } from "react";
import Layout from "../components/layout";
import CardGrid from "../components/cardGrid.js"
import "./style.css";
import Footer from "../components/footer";

const FadePage = () => {
  const random1 = [
    {
      image: "1.png",
      easing: "noeasing",
    },
    {
      image: "2.png",
      easing: "easing1",
    },
    {
      image: "3.png",
      easing: "easing2",
    },
    {
      image: "4.png",
      easing: "easing3",
    },
    {
      image: "5.png",
      easing: "easing4",
    },
    {
      image: "6.png",
      easing: "easing5",
    },
  ];
  const random2 = [
    {
      image: "1.png",
      easing: "noeasing",
    },
    {
      image: "2.png",
      easing: "easing2",
    },
    {
      image: "3.png",
      easing: "easing3",
    },
    {
      image: "4.png",
      easing: "easing1",
    },
    {
      image: "5.png",
      easing: "easing5",
    },
    {
      image: "6.png",
      easing: "easing4",
    },
  ];
  const random3 = [
    {
      image: "1.png",
      easing: "noeasing",
    },
    {
      image: "2.png",
      easing: "easing5",
    },
    {
      image: "3.png",
      easing: "easing3",
    },
    {
      image: "4.png",
      easing: "easing1",
    },
    {
      image: "5.png",
      easing: "easing2",
    },
    {
      image: "6.png",
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
