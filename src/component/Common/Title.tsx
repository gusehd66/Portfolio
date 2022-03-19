import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const TitleBox = styled.div`
  width: 90%;
  height: 56px;
  font-size: 32px;
  display: flex;
  justify-content: left;
  align-items: center;
  position: relative;
  padding-left: 56px;
  margin-bottom: 30px;
  background-color: #ddd;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 60px;
    left: 0px;
    border-top: solid 4px #ddd;
    border-bottom: solid 4px #ddd;
  }
  > svg {
    color: #d8332d;
  }
  > p {
    margin-left: 40px;
    font-weight: 800;
  }
`;

const Title = ({ title }: { title: string }) => {
  return (
    <TitleBox>
      <FontAwesomeIcon icon={faBookmark} />
      <p>{title}</p>
    </TitleBox>
  );
};

export default Title;
