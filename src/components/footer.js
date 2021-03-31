import * as React from "react";
import { css } from "@emotion/core";
import Button from '@material-ui/core/Button';


const Footer = () => {
  return (
    <footer
    css={css`
    background-color: rgb(240, 240, 240);
    box-shadow: 1px 0px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: flex-end;
    width: 100vw;
    position: fixed;
    bottom: 0;
    z-index: -1;
    padding: 1em;
  `}>
      <Button variant="outlined">
    Next</Button>
    </footer>
  );
};

export default Footer;
