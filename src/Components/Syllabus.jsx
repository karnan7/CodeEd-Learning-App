import React, { useState } from "react";
import styled from "styled-components";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { PiVideo } from "react-icons/pi";

const Syllabus = () => {
  const [open, setOpen] = useState(false);

  const item = [
    {
      week: 1,
      content: "Introduction",
    },
    {
      week: 2,
      content: "Advanced",
    },
    {
      week: 3,
      content: "Experimental",
    },
  ];
  return (
    <div>
      <div onClick={() => setOpen(!open)}>
        <Select
          style={{
            backgroundColor: open ? "#e9eaf0" : "#F7F9FA",
          }}
        >
          <span>COURSE CONTENT</span>
          {open ? (
            <AiFillCaretUp fontSize={20} />
          ) : (
            <AiFillCaretDown fontSize={20} />
          )}
        </Select>
        {open && (
          <Options>
            {item.map((i) => (
              <Option>
                <PiVideo fontSize={25} />
                <span>{i.content}</span>
              </Option>
            ))}
          </Options>
        )}
      </div>
    </div>
  );
};

export default Syllabus;

const Select = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 5px 5px 0px 0px;
  padding: 20px;
  cursor: pointer;
  span {
    font-weight: 500;
  }
`;
const Options = styled.div`
  padding: 20px;
  border: 1px solid black;
  border-radius: 0px 0px 5px 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  span {
    font-size: 18px;
    cursor: pointer;
    &:hover {
      color: blue;
      text-decoration: underline;
    }
  }
`;
