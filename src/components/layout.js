import * as React from "react";
import { Global, css } from "@emotion/core";
import Header from "./header";
import Helmet from "react-helmet";
import useSiteMetadata from "../hooks/use-sitemetadata";


const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          html,
          body {
            -webkit-tap-highlight-color: transparent;
            margin: 0;
            height: 100vh;
            overflow: hidden;
            font-size: 18px;
            color: #555;
            line-height: 1.4;
            font-family: 'Trebuchet MS', Helvetica, sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;

            > div {
              margin-top: 0;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              color: #222;
              line-height: 1.1;

              + * {
                margin-top: 0.5rem;
              }
            }
            strong {
              color: #222;
            }
            li {
              margin-top: 0.25rem;
            }
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
      name="viewport"
      content="initial-scale=1, viewport-fit=cover, user-scalable=no"
    />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black-translucent"
    />
    <link rel="manifest" href="/site.webmanifest" />
      </Helmet>
      <Header />
      <main
        css={css`
          margin: 2rem auto 4rem;
          max-width: 90vw;
          width: 550px;
          standalone: mt-22;
          padding-top: 9vh;
        `}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
