import * as React from "react";
import { css } from "@emotion/core";
import Button from "@material-ui/core/Button";
import {Link} from "gatsby";

const Footer = (props) => {
  return (
    <footer
      css={css`
        background-color: rgb(240, 240, 240);
        box-shadow: 1px 0px 5px rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: space-between;
        width: 100vw;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 0;
        padding: 1em;
      `}
    >

      <h1>Round {props.round}</h1>
        <Button variant="outlined"><Link to={props.nextPage}>Next</Link></Button>     
    </footer>
  );
};

export default Footer;
