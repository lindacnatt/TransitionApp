import * as React from "react";
import { css } from "@emotion/core";
import Button from "@material-ui/core/Button";
import {Link} from "gatsby";

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
        z-index: 0;
        padding: 1em;
      `}
    >
        <Button variant="outlined"><Link to="/fade">Next</Link></Button>     
    </footer>
  );
};

export default Footer;
