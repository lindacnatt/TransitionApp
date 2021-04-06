import React from "react";
import { css } from "@emotion/core";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./header";

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
      <Header title="Detail" />
      <div onClick={() => props.close()}>
        <FontAwesomeIcon
          className="icon"
          icon={faAngleLeft
          }
          css={css`
            top: 0;
            left: 0;
            position: absolute;
            z-index: 4;
            margin: 1.5rem;
            color: white;
            font-size: 1rem;
          `}
        />
      </div>
      <div
        className="image"
        css={css`
          top: 0;
          height: 30vh;
          background: url("../images/${props.img}");
          background-size: cover;
          background-position: center;
        `}
      ></div>
      <h2
        css={css`
          padding: 1rem;
          margin-top: 2rem;
        `}
      >
        This is a card
      </h2>
      <p  css={css`
          padding: 1rem;
          opacity: 0.9;
        `}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  );
};

export default CardDetail;
