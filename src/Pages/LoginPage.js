import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logImage from "../assets/login.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import {
  selectUserEmail,
  selectUserName,
  setUserLoginDetails,
} from "../features/user/userSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

  const handleGoogleSignIn = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleAuthProvider)
      .then((userCredentials) => {
        setUser(userCredentials.user);
      })
      .catch((error) => console.error(error));
  };

  const handleEmailSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setUser(userCredentials.user);
      })
      .catch((error) => console.error(error));
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [userEmail]);

  return (
    <Container>
      <CharImage src={logImage} />
      <Log>
        <h1>Log In</h1>
        <Providers>
          <Google onClick={handleGoogleSignIn}>
            <GButton>
              <FcGoogle size="20px" />
              <span>Sign in with Google</span>
            </GButton>
          </Google>
          <Apple>
            <AButton>
              <FaApple size="20px" color="#999999" />
              <span>Sign in with Apple</span>
            </AButton>
          </Apple>
        </Providers>
        <LoginForm>
          <InputGrp
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputGrp
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </LoginForm>
        <SubmitButton onClick={handleEmailSignIn}>Log In</SubmitButton>
        <SwitchLink>
          Don't have an account ?{" "}
          <Link to="/signup" style={{ color: "#346BD4" }}>
            Register Here
          </Link>{" "}
        </SwitchLink>
      </Log>
    </Container>
  );
};

export default LoginPage;

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
