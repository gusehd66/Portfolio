import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { NextPageBtnTypes } from "../types/types";

const NextBtn = styled.button`
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 50px;
  height: 50px;
`;

const NextPageBtn = ({ link }: NextPageBtnTypes) => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate(link);
  };

  return <NextBtn onClick={handleNext}>Next</NextBtn>;
};
export default NextPageBtn;
