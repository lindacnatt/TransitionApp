import * as React from "react";
import { css } from "@emotion/core";
import Layout from "../components/layout";
import "./style.css";
import Button from "@material-ui/core/Button";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <Layout>
      <div
        css={css`
          min-height: 100vh;
          display: flex;
            justify-content: center;
          align-items: center;
        `}
      >
        <Button variant="outlined">
          <Link to="/slide">Start</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default IndexPage;
