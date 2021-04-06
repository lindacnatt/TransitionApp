import * as React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const NavLink = styled(Link)`
  color: white;
  font-size: 1rem;
  line-height: 1;
  margin: 0 0.5rem 0 0.5rem;
  padding: 0.25rem;
  text-decoration: none;

  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = (props) => (
  <header
    css={css`
      background-color: #454545;
      display: flex;
      justify-content: center;
      width: 100vw;
      position: fixed;
      top: 0;
      z-index: 0;
      padding-top: 1rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-bottom: 1rem;
    `}
  >

    <NavLink to="/">{props.title}</NavLink>
  </header>
);

export default Header;
