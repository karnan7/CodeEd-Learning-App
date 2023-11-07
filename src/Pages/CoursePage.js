import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import CourseCard from "../Components/CourseCard";

const CoursePage = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e, searchInput) => {
    e.preventDefault();
  };
  return (
    <Container>
      <InputGrp onSubmit={handleSearch}>
        <SearchButton>
          <FaSearch cursor="pointer" color=" #22263b" fontSize={25} />
        </SearchButton>

        <Input
          placeholder="Search Courses"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </InputGrp>
      <CoursesContainer>
        <h2>Available Courses</h2>
        <CourseGrp>
          <CourseCard title="Ultimate Javascript" description="" />
          <CourseCard title="Ultimate Javascript" description="" />
          <CourseCard title="Ultimate Javascript" description="" />
          <CourseCard title="Ultimate Javascript" description="" />
          <CourseCard title="Ultimate Javascript" description="" />
          <CourseCard title="Ultimate Javascript" description="" />
        </CourseGrp>
      </CoursesContainer>
    </Container>
  );
};

export default CoursePage;

const Container = styled.div`
  min-height: calc(100vh-70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 50px 80px 50px;
`;
const InputGrp = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid gray;
  height: 50px;
  width: 500px;
  padding: 10px 20px;
  border-radius: 10px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const SearchButton = styled.button`
  border: none;
  background-color: transparent;
`;
const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 16px;
  height: 40px;
`;
const CoursesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 900px) {
    align-items: center;
  }
`;
const CourseGrp = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 35px;
  @media (max-width: 1400px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    justify-self: center;
  }
`;
