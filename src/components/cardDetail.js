import React, { useState } from "react";
import { css } from "@emotion/core";

const CardDetail = () => {
  return (
    <div
      className= "Background"
      css={css`
      top: 0;
      bottom: 0;
      width: 100vw;
      height: 100vh;
      position: absolute;
      z-index: 1;
      margin-top: 0;
      background-color: #fafafa;
    `}
    >
      <div
        className="image"
        css={css`
          top: 0;
          height: 60vw;
          background-color: grey;
        `}
      ></div>
      <h2
        css={css`
          padding: 10px;
        `}
      >
        Text 1
      </h2>
    </div>
  );
};

export default CardDetail;
