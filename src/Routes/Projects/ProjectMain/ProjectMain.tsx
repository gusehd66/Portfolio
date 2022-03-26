import { Link } from "react-router-dom";
import styled from "styled-components";
import Title from "../../../component/Common/Title";
import { ProjectData } from "../../../assets/data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faI, faLinesLeaning } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const ProjectMainContainer = styled.div`
  border: solid 4px #444;
  overflow: hidden;
  width: 50%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  box-sizing: border-box;
  position: absolute;
  top: 50vh;
  box-shadow: 8px 8px 8px #444;
  transform: translateY(-50%);
  > .contents {
    width: 70%;
    display: flex;
    min-width: 100px;
    align-items: center;
    > span {
      border: solid 3px #222;
      box-sizing: border-box;
      width: 30px;
      height: 30px;
      text-align: center;
      background-color: #444;
      color: #fff;
      margin-right: 10px;
    }
  }

  @media screen and (max-width: 720px) {
    width: 80%;
    padding: 30px;
    height: 70vh;
    > .contents {
      width: 90%;
    }
  }
`;

const ProjectList = styled.ul`
  list-style: none;
  margin-top: 0;
  width: 70%;
  > a {
    text-decoration: none;
    > li {
      line-height: 1.6rem;
      font-size: 25px;
      font-weight: 600;
      color: #222;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: 0.3s;
      &:hover {
        color: #d8332d;
      }
      > p {
        flex: 1;
        margin: 20px 10px;
        overflow: hidden;
        position: relative;
        font-size: 22px;
        &::after {
          content: "";
          position: absolute;
          width: 100%;
          top: 50%;
          border: dashed 1px #000;
          transform: translateX(16px);
        }
      }
    }
  }
  @media screen and (max-width: 720px) {
    width: 100%;
    padding-left: 20px;
    > a {
      > li {
        font-size: 16px;
        line-height: 1.4em;
        > p {
          font-size: 17px;
        }
      }
    }
  }
`;

const ProjectMain = () => {
  return (
    <ProjectMainContainer>
      <Title title={"Projects"} />
      <div className="contents">
        <span>
          <FontAwesomeIcon icon={faI as IconProp} />
        </span>
        <h3>목 차</h3>
      </div>
      <ProjectList>
        {ProjectData.map((project, index) => (
          <Link to={`${index + 1}`} key={index}>
            <li>
              <span>
                <FontAwesomeIcon icon={faLinesLeaning as IconProp} /> .
              </span>
              <p>{project.title}</p>
              <span> {index + 1}</span>
            </li>
          </Link>
        ))}
      </ProjectList>
    </ProjectMainContainer>
  );
};

export default ProjectMain;
