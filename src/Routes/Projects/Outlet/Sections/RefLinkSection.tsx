import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const LinkContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  > h3 {
    margin: 0;
  }
  > div {
    font-size: 18px;
    > svg {
      width: 20px;
      margin-right: 8px;
    }
    > span {
      font-weight: 800;
    }
    > a {
      text-decoration: none;
      color: #000;
      &:hover {
        color: #a52a2a;
      }
    }
  }
`;

const LinkSection = ({ github, demo }: { github: string; demo: string }) => {
  return (
    <LinkContainer>
      <h3>관련 링크</h3>
      <div>
        <FontAwesomeIcon icon={faGithub} />
        <span>Github : </span>
        <a href={github} target="_blank" rel="noreferrer">
          {github}
        </a>
      </div>
      <div>
        <FontAwesomeIcon icon={faLink as IconProp} />
        <span>Demo : </span>
        <a href={demo} target="_blank" rel="noreferrer">
          {demo}
        </a>
      </div>
    </LinkContainer>
  );
};

export default LinkSection;
