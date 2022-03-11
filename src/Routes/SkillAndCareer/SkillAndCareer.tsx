import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RefObject } from "react";
import styled from "styled-components";
import { CareerData } from "../../assets/data/data";
import Container from "../../component/Common/Container";
import NextPageBtn from "../../component/Common/NextPageBtn";
import Title from "../../component/Common/Title";
import Career from "./Sections/Career";
import SkillDetails from "./Sections/SkillDetails";

const SACContainer = styled(Container)``;
const SACContentsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: center;
  margin-bottom: 40px;
`;

interface Props {
  nodeRef: RefObject<HTMLInputElement>;
}

const SkillAndCareer = ({ nodeRef }: Props) => {
  return (
    <SACContainer ref={nodeRef}>
      <Title>
        <FontAwesomeIcon icon={faBookmark} />
        <p>Skills</p>
      </Title>
      <SACContentsBox>
        <SkillDetails icon={faHtml5} desc={"HTML"} color={"#f75421"} />
        <SkillDetails icon={faCss3} desc={"CSS"} color={"#2091eb"} />
        <SkillDetails icon={faJs} desc={"JS"} color={"#f7c427"} />
        <SkillDetails icon={faReact} desc={"REACT"} color={"#5ed3f3"} />
        <SkillDetails icon={faSass} desc={"SASS"} color={"#c66394"} />
        <SkillDetails icon={faGitAlt} desc={"GIT"} color={"#eb4d28"} />
      </SACContentsBox>
      <Title>
        <FontAwesomeIcon icon={faBookmark} />
        <p>Career</p>
      </Title>
      <SACContentsBox>
        <Career data={CareerData} />
      </SACContentsBox>
      <NextPageBtn link={"/projects"} />
    </SACContainer>
  );
};

export default SkillAndCareer;
