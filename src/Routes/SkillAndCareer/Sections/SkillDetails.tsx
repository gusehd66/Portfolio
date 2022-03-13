import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SkillDetailComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
  margin: 10px;
  transition: 0.4s;
  &:hover {
    transform: translateY(-4px);
  }
  > svg {
    width: 100%;
    height: 100px;
  }
  > span {
    font-size: 25px;
    font-weight: bold;
  }
`;

interface SkillProps {
  icon: IconProp;
  desc: string;
  color: string;
}

const SkillDetails = ({ icon, desc, color }: SkillProps) => {
  return (
    <SkillDetailComponent>
      <FontAwesomeIcon icon={icon} color={color} />
      <span>{desc}</span>
    </SkillDetailComponent>
  );
};

export default SkillDetails;
