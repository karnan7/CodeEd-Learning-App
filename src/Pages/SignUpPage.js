import React from "react";
import styled from "styled-components";
import logImage from "../assets/login.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <Container>
      <CharImage src={logImage} />
      <Log>
        <h1>Sign Up</h1>
        <Providers>
          <Google>
            <GButton>
              <FcGoogle size="20px" />
              <span>Sign up with Google</span>
            </GButton>
          </Google>
          <Apple>
            <AButton>
              <FaApple size="20px" color="#999999" />
              <span>Sign up with Apple</span>
            </AButton>
          </Apple>
        </Providers>
        <LoginForm>
          <InputGrp placeholder="Name" />
          <InputGrp placeholder="Email" />
          <InputGrp placeholder="Password" />
        </LoginForm>
        <SubmitButton>Sign Up</SubmitButton>
        <SwitchLink>
          Already have an account ?{" "}
          <Link to="/login" style={{ color: "#346BD4" }}>
            LogIn
          </Link>{" "}
        </SwitchLink>
      </Log>
    </Container>
  );
};

export default SignUpPage;

const Container = styled.div`
  height: calc(100vh-70px);
  padding: 0px 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
const CharImage = styled.img`
  width: 45%;
  height: 45%;
`;
const Log = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  h1 {
    font-size: 60px;
    color: #172a88;
    margin: 0;
    @media screen and (max-width: 900px) {
      font-size: 40px;
    }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    gap: 10px;
  }
`;
const Providers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 5px;
  }
`;
const Google = styled.div`
  display: flex;
  justify-content: space-between;
`;
const GButton = styled.button`
  padding: 7px 25px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #858585;
  font-size: 13px;
  background-color: #eeeff6;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 10px;
`;
const Apple = styled(Google)``;
const AButton = styled(GButton)``;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 400px;
  padding: 50px 30px 60px 30px;
  border-radius: 20px;
  background-color: #eeeff6;
`;
const InputGrp = styled.input`
  height: 40px;
  padding: 11px 15px;
  background-color: #eeeff6;
  border: none;
  outline: none;
  border-bottom: 1px solid gray;
`;

const SubmitButton = styled(GButton)`
  background-color: #172a88;
  color: white;
  height: 40px;
  justify-content: center;
  font-size: 16px;
  width: 80%;
  @media screen and (max-width: 900px) {
    width: 50%;
  }
`;

const SwitchLink = styled.span``;
