import * as React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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

const Header = () => (
  <header
    css={css`
      background-color: #454545;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding-top: 2rem;
      padding-left: 1rem;
      padding-right: 1rem;
    `}
  >

    <NavLink to="/">App</NavLink>
    <FontAwesomeIcon
      icon={faBars}
      css={css`
      margin: 0 0.75rem 0 0;
    color: white;
      `}
    />
  </header>
);

export default Header;
