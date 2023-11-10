import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SiCodenewbie } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserEmail,
  selectUserName,
  selectUserPhoto,
  setSignOutState,
} from "../features/user/userSlice";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { IoMdNotifications, IoMdSettings } from "react-icons/io";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const userName = useSelector(selectUserName);
  const userImg = useSelector(selectUserPhoto);
  const userEmail = useSelector(selectUserEmail);

  const handleSignUp = () => {
    navigate("/signup");
  };
  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(setSignOutState());
      navigate("/");
    });
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
        <a>Courses</a>
      </NavMenu>
      {!userEmail ? (
        <LoginButton onClick={handleSignUp}>Sign Up</LoginButton>
      ) : (
        <SignOut>
          <UserImg
            src={
              userImg
                ? `${userImg}`
                : "data:image/png;base64,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"
            }
            alt={userName}
            onClick={() => setOpen(!open)}
          />
          {open && (
            <Dropdown>
              <h2>{userName ? `${userName}` : "Name"}</h2>
              <Item style={{ borderTop: "1px solid #22263b" }}>
                <CgProfile fontSize={20} />
                <span>My Profile</span>
              </Item>
              <Item>
                <IoMdNotifications fontSize={20} />
                <span>Notifications</span>
              </Item>
              <Item>
                <IoMdSettings fontSize={20} />
                <span>Settings</span>
              </Item>
              <Item onClick={handleSignOut}>
                <BiLogOut fontSize={20} />
                <span>Log Out</span>
              </Item>
            </Dropdown>
          )}
        </SignOut>
      )}
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
const UserImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid #22263b;
`;

const SignOut = styled.div``;

const Dropdown = styled.div`
  position: absolute;
  z-index: 99;
  top: 20;
  right: 50px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 25px 0px 0px 0px;
  h2 {
    text-align: center;
    margin: 0;
    margin-bottom: 20px;
  }
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 15px 25px;
  border-bottom: 1px solid #22263b;
`;
