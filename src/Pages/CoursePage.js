import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import CourseCard from "../Components/CourseCard";
import { useDispatch, useSelector } from "react-redux";
import { setCourseData } from "../features/course/courseSlice";
import { Link } from "react-router-dom";

const CoursePage = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const [filteredCourse, setFilteredCourse] = useState([]);

  const courseList = useSelector((state) => state.course.courses);

  const fetchCourse = () => {
    fetch("https://api.npoint.io/4f8185583270d212694d")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(
          setCourseData({
            courses: data.courses || [],
          })
        )
      })
      .catch((error) => console.log(error))
  };

  console.log(courseList)
  
  useEffect(() => {
    fetchCourse();
  }, []);

  const handleSearch = () => {
    const filtered = courseList.filter((course) =>
      course.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredCourse(filtered);
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    handleSearch();
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
          onChange={handleChange}
        />
      </InputGrp>
      <CoursesContainer>
        <h2>Available Courses</h2>
        <CourseGrp>
          {searchInput === ""
            ? courseList.map((course) => (
                <Link to={`/courses/details/` + course.id}>
                  <CourseCard
                    key={course.id}
                    title={course.name}
                    thumbnail={course.thumbnail}
                    expertise={course.expertise}
                    duration={course.duration}
                    amount={course.price}
                  />
                </Link>
              ))
            : filteredCourse.map((course) => (
                <CourseCard
                  key={course.id}
                  title={course.name}
                  thumbnail={course.thumbnail}
                  expertise={course.expertise}
                  duration={course.duration}
                  amount={course.price}
                />
              ))}
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
const InputGrp = styled.div`
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
  width: 100%;
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
