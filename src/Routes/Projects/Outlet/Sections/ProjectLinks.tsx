import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 60px;
  text-align: left;
  > h3 {
    margin: 0;
    text-align: center;
  }
`;

const LinkBox = styled(Link)<{ selected: boolean }>`
  color: ${(props) => (props.selected ? "#a52a2a" : "#4f4f4f")};
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
  list-style: none;
  text-decoration: none;
  &::before {
    content: "ㅡ";
    position: relative;
    left: -5px;
    border-left: solid 1px #000;
  }
`;

const ProjectLinks = ({ param }: { param: number }) => {
  return (
    <LinkContainer>
      <h3>목차</h3>
      <LinkBox to="../1" selected={param === 1}>
        Project 1
      </LinkBox>
      <LinkBox to="../2" selected={param === 2}>
        Project 2
      </LinkBox>
      <LinkBox to="../3" selected={param === 3}>
        Project 3
      </LinkBox>
      <LinkBox to="../4" selected={param === 4}>
        Project 4
      </LinkBox>
      <LinkBox to="../5" selected={param === 5}>
        Project 5
      </LinkBox>
    </LinkContainer>
  );
};

export default ProjectLinks;
