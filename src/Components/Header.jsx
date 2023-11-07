import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SiCodenewbie } from "react-icons/si";

const Header = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };
  return (
    <Nav>
      <Link to="/">
        <Logo>
          <SiCodenewbie fontSize={35} />
          <span>CodeEd</span>
        </Logo>
      </Link>
      <NavMenu>
        <a href="/courses">Courses</a>
      </NavMenu>
      <LoginButton onClick={handleSignUp}>Sign Up</LoginButton>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: 70px;
  padding: 0px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  span {
    font-size: 20px;
    font-weight: 500;
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const LoginButton = styled.button`
  padding: 10px 20px;
  background-color: #22263b;
  color: #fff;
  cursor: pointer;
`;
