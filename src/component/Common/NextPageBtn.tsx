import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { NextPageBtnTypes } from "../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

const NextBtn = styled.div`
  position: fixed;
  right: 50px;
  bottom: 50px;
  animation: pong2 1s ease-in infinite alternate;
  text-align: center;
  > svg {
    cursor: pointer;
    color: #a52a2a;
    width: 50px;
    height: auto;
  }
  > p {
    margin: 0;
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    font-weight: bold;
  }

  &:hover {
    color: #555;
    animation: none;
    > svg {
      color: #ca4c4c;
    }
  }

  @keyframes pong2 {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-3px);
    }
  }
`;

const NextPageBtn = ({ link }: NextPageBtnTypes) => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate(link);
  };

  return (
    <NextBtn>
      <FontAwesomeIcon icon={faBookOpen as IconProp} onClick={handleNext} />
      <p>next</p>
    </NextBtn>
  );
};
export default NextPageBtn;
