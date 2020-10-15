import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  padding: 25px 125px;
  display: flex;
  align-items: center;
`;

const HeaderTitle = styled.div`
  flex: 4;
`;

const Links = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0px 25px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    left: 0;
    height: 2px;
    right: 0;
    bottom: -3px;
    transform: scaleX(0);
    background-color: black;
  }

  &:focus::after {
    transform: scaleX(1);
  }
`;

const Header = (props) => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Fruit Emporium</HeaderTitle>
      <Links>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
      </Links>
    </HeaderWrapper>
  );
};

export default Header;
