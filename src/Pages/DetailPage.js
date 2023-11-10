import React from "react";
import styled from "styled-components";
import { AiFillSignal, AiFillClockCircle } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import Syllabus from "../Components/Syllabus";

const DetailPage = () => {
  return (
    <Container>
      <LeftSection>
        <Course>
          <h1>Big Data Foundation Course</h1>
          <p>
            Learn the basics of React Native development and build your first
            mobile app. React Native is an open-source UI software framework
            created by Meta Platforms, Inc. It is used to develop applications
            for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by
            enabling developers to use the React framework along with native
            platform capabilities. React primitives render to native platform
            UI, meaning your app uses the same native platform APIs other apps
            do. Many platforms, one React. Create platform-specific versions of
            components so a single codebase can share code across platforms.
            With React Native, one team can maintain multiple platforms and
            share a common technology—React.
          </p>
          <DetailGrp>
            <Detail>
              <FaUserTie fontSize={25} />
              <span>Dileep</span>
            </Detail>
            <Detail
              style={{
                padding: "0px 30px",
                borderLeft: "1px solid #22263b",
                borderRight: "1px solid #22263b",
              }}
            >
              <AiFillSignal fontSize={25} />
              <span>Beginners</span>
            </Detail>
            <Detail>
              <AiFillClockCircle fontSize={25} />
              <span>8 week</span>
            </Detail>
          </DetailGrp>
        </Course>
        <Syllabus />
      </LeftSection>
      <RightSection>
        <img
          src="https://cdn.dribbble.com/users/875161/screenshots/3653859/media/59c5c9fbe8b409f564c841c19c1f2d2c.png?resize=800x600&vertical=center"
          alt=""
        />
        <h2>$399</h2>
        <ButtonGrp>
          <EnrollButton>Enroll</EnrollButton>
          <TrialButton>Free Trial</TrialButton>
        </ButtonGrp>
        <Contents>
          <h4>What's inside</h4>
          <div>
            <span>Lessons</span>
            <span>Test</span>
            <span>Certificate</span>
          </div>
        </Contents>
      </RightSection>
    </Container>
  );
};

export default DetailPage;

const Container = styled.div`
  min-height: calc(100vh-70px);
  display: flex;
  padding: 30px 50px;
  gap: 50px;
  color: #22263b;

  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;
const LeftSection = styled.div`
  text-align: left;
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
const RightSection = styled.div`
  flex: 1;
  border: 1px solid #172a88;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  overflow: hidden;

  img {
    width: 350px;
    @media (max-width: 1300px) {
      width: 100%;
    }
  }

  h2 {
    font-size: 40px;
    margin: 0;
    padding: 10px;
    color: green;
  }
`;
const Course = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin: 0;
    font-size: 40px;
  }

  p {
    line-height: 30px;
    font-weight: 300;
  }
`;
const DetailGrp = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 900px) {
    gap: 10px;
  }
`;
const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ButtonGrp = styled.div`
  display: flex;
  gap: 20px;
  padding: 0px 10px;
`;
const EnrollButton = styled.button`
  color: #fff;
  background-color: #172a88;
  border: none;
  padding: 10px 30px;
  flex: 1;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
`;
const TrialButton = styled(EnrollButton)`
  background-color: #fff;
  border: 1px solid #172a88;
  color: black;
  flex: 3;
`;
const Contents = styled.div`
  width: 100%;
  margin-top: 20px;
  border-top: 1px solid #172a88;
  text-align: left;
  padding: 0px 10px 30px 10px;

  h4 {
    margin: 20px 0px 5px 0px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-left: 6px;
  }
`;
