import React from "react";
import styled from "styled-components";
import image from "../assets/character.png";

const CourseCard = ({ title, description, amount, hour }) => {
  return (
    <Card>
      <TopSide>
        <img src={image} alt="" />
      </TopSide>
      <BottomSide>
        <h3>{title}</h3>
        <p>
          This is course is completely job oriented and helps learners to
          achieve their career boost.
        </p>
        <CardFooter>
          <span>$29</span>
          <span>40hr</span>
        </CardFooter>
      </BottomSide>
    </Card>
  );
};

export default CourseCard;

const Card = styled.div`
  width: 250px;
  border: 1px solid gray;
  border-radius: 20px;
  padding: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  box-shadow: 0px 0px 13px 1px rgba(34, 38, 59, 0.5);
  &: hover {
    transform: scale(1.1);
  }
`;
const TopSide = styled.div`
  img {
    height: 100%;
    width: 100%;
  }
`;
const BottomSide = styled.div`
  text-align: left;
  h3 {
    font-weight: 500;
    margin: 0;
  }
  p {
    font-size: 14px;
    font-weight: 300;
  }
`;
const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  color: green;
`;
