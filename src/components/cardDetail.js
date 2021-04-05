import React from "react";
import { css } from "@emotion/core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CardDetail = (props) => {
  return (
    <div
      className="Background"
      css={css`
        top: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        position: absolute;
        z-index: 4;
        margin-top: 0;
        background-color: #fafafa;
      `}
    >
      <div onClick={() => props.close()}>
      <FontAwesomeIcon
        icon={faTimes}
        css={css`
          top: 0;
          left: 0;
          position: absolute;
          z-index: 4;
          margin: 1rem;
          color: black;
        `}
      />
      </div>
      <div
        className="image"
        css={css`
          top: 0;
          height: 30vh;
          background: url('../images/${props.img}');
         
        `}
      ></div>
      <h2
        css={css`
          padding: 10px;
          margin-top: 2rem;
        `}
      >
        This is a card
      </h2>
    </div>
  );
};

export default CardDetail;
