import React from "react";
import styled from "styled-components";
import image from "../assets/character.png";
import { AiFillSignal, AiFillClockCircle } from "react-icons/ai";

const CourseCard = ({ thumbnail, title, expertise, amount, duration }) => {
  return (
    <Card>
      <TopSide>
        <img src={thumbnail} alt="thumbnail" />
      </TopSide>
      <BottomSide>
        <h3>{title}</h3>
        <CardFooter>
          <span>
            <AiFillSignal fontSize={18} />
            {expertise}
          </span>
          <span>
            <AiFillClockCircle fontSize={20} />
            {duration}
          </span>
        </CardFooter>
        <Amount>{amount}</Amount>
      </BottomSide>
    </Card>
  );
};

export default CourseCard;

const Card = styled.div`
  width: 250px;
  border: 1px solid gray;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  box-shadow: 2px 5px 10px -5px #22263b;
  &: hover {
    transform: scale(1.1);
    border: 1px solid #22263b;
  }
`;
const TopSide = styled.div`
  img {
    height: 100%;
    width: 100%;
  }
`;
const BottomSide = styled.div`
  display: flex;
  padding: 15px;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
  h3 {
    font-weight: 500;
    margin: 0;
    padding-bottom: 10px;
    border-bottom: 1px solid #22263b;
    text-align: left;
  }
`;
const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 300;
  }
`;
const Amount = styled.span`
  color: green;
  text-align: left;
  margin-left: 5px;
  font-size: 18px;
  font-weight: 500;
`;
