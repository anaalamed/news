import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <Header>
      <SLink to="/">
        {/* <Logo src="logo-t.png" alt="Tovana logo" /> */}
      </SLink>
      <SLink to="/">Home</SLink>
      <SLink to="/cloud">Word Cloud</SLink>

    </Header>
  );
};
export default TopBar;

const Header = styled.header`
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  position: fixed;
  left: 0;
  right: 0;
  padding: 2rem;
  display: flex;
  align-items: center;
  background-color: #0a2136;
`;

const SLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 2rem;
  font-size: 3rem;
  :hover {
    text-decoration: underline;
  }
`;
const Logo = styled.img`
  width: 3rem;
  cursor: pointer;
`;
