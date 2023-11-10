import React from "react";
import styled from "styled-components";
import learn from "../assets/learn.png";
import mentor from "../assets/mentor.png";
import job from "../assets/job.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container>
      <Wrap>
        <LearnCard>
          <img src={learn} alt="learn-character" />
          <div>
            <h2>Learn Online</h2>
            <p>
              Steer your future in the right direction. An online platform that
              helps learners pick online certifications.
            </p>
          </div>
        </LearnCard>
        <MentorCard>
          <img src={mentor} alt="mentor-character" />
          <div>
            <h2>Expert Mentors</h2>
            <p>
              A good mentor seeks to help a student optimize an educational
              experience, and to help the student find suitable employment.
            </p>
          </div>
        </MentorCard>
        <JobCard>
          <img src={job} alt="job-character" />
          <div>
            <h2>Land a Job</h2>
            <p>
              Improve your quality of life, career and salary, working for the
              best companies, wherever they are.
            </p>
          </div>
        </JobCard>
      </Wrap>
      <Link to="/courses">
        <button>Course</button>
      </Link>
    </Container>
  );
};

export default About;

const Container = styled.div`
  min-height: 80vh;
  padding: 0px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrap = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 50px;
  }
`;
const LearnCard = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  img {
    position: absolute;
    top: -25;
    left: 70;
    transform: translate(-20%, -50%);
    width: 300px;
    height: 300px;
    flex: 1;
    @media (max-width: 900px) {
      position: none;
      width: 200px;
      height: 200px;
    }
  }
  div {
    padding: 90px 20px 20px 20px;
    background-color: #e1f7ed;
    flex: 1;
    border-radius: 15px;
  }
  h2 {
    margin: 0;
    text-align: left;
  }
  p {
    text-align: left;
  }
`;
const MentorCard = styled(LearnCard)`
  div {
    background-color: #f5ebeb;
  }
`;
const JobCard = styled(LearnCard)`
  div {
    background-color: #e9f4fa;
  }
`;
