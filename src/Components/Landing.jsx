import React from "react";
import styled from "styled-components";
import { FaArrowRightLong } from "react-icons/fa6";
import LandingImage from "../assets/character.png";

const Landing = () => {
  return (
    <MainLanding>
      <LeftSection>
        <span>Where</span>
        <span>Curiosity Meets</span>
        <span>Achievements</span>
        <LBottom>
          <LButton>
            Explore
            <FaArrowRightLong fontSize={20} />
          </LButton>
          <p>
            Discover, learn & Excel with our diverse range of courses taught by
            experts world wide
          </p>
        </LBottom>
      </LeftSection>
      <RightSection>
        <img src={LandingImage} alt="character" />
      </RightSection>
    </MainLanding>
  );
};

export default Landing;

const MainLanding = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0px 50px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1300px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const LeftSection = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  span {
    font-size: 60px;
    font-weight: 500;
    text-align: left;
    line-height: 70px;
    @media (max-width: 1000px) {
      text-align: center;
      font-size: 45px;
      line-height: 40px;
    }
  }
  @media (max-width: 1300px) {
    z-index: 9;
  }
`;

const LBottom = styled.div`
  margin-top: 10px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  gap: 20px;
  p {
    text-align: left;
    width: 350px;
    font-size: 16px;
    font-weight: 100;
    @media (max-width: 1000px) {
      margin-top: 0px;
      text-align: center;
    }
  }

  @media (max-width: 1300px) {
    margin-bottom: -150px;
    flex-direction: column;
  }
  @media (max-width: 700px) {
    margin-bottom: -50px;
  }
`;

const LButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  background-color: #22263b;
  color: #fff;
  cursor: pointer;
`;

const RightSection = styled.div`
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    @media (max-width: 1300px) {
      width: 70%;
      height: 70%;
    }
  }
`;
