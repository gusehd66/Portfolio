import { RefObject } from "react";
import styled from "styled-components";
import Container from "../../component/Common/Container";

const SACContainer = styled(Container)``;

interface Props {
  nodeRef: RefObject<HTMLInputElement>;
}

const SkillAndCareer = ({ nodeRef }: Props) => {
  return <SACContainer ref={nodeRef}>Skill&Career</SACContainer>;
};

export default SkillAndCareer;
