import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleLeft,
  faAngleRight,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ProjectData, ProjectModel } from "../../../assets/data/data";
import Title from "../../../component/Common/Title";
import { RootState } from "../../../redux/store/store";

const OutletContainer = styled.div<{ count: number }>`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  > .imageBox {
    width: 300px;
    height: 300px;
    border: solid 1px #000;
    display: flex;
    flex: 1 1 1;
    overflow: hidden;
    > img {
      display: flex;
      width: 100%;
      height: 100%;
      min-width: 300px;
      position: relative;
      transform: ${(props) => `translateX(-${300 * props.count}px)`};
      object-fit: cover;
    }
  }

  /* ImageControlButton */
  .imgControlBox {
    margin-top: 16px;

    > button {
      cursor: pointer;
      width: 30px;
      margin: 0 8px;
      height: 30px;
      border-radius: 50%;
      border: none;
      background: radial-gradient(#a52a2a 30%, #f46d6d);
      color: #fff;
      font-size: 18px;
      transition: 0.3s;
      box-shadow: 3px 3px 16px #888;
      &:hover {
        border: solid 1px #a52a2a;
        background: radial-gradient(#fff 30%, #a52a2a);
        color: #a52a2a;
      }
    }
  }

  > .descBox,
  .skillBox {
    width: 100%;
    margin-bottom: 10px;
    > p {
      margin: 0 0 8px 0;
      line-height: 1.4rem;
    }
    > div {
      display: flex;
      justify-content: flex-start;
      color: #a52a2a;
      font-weight: 500;
      > span {
        padding: 0 8px;
        &:hover {
          position: relative;
          transition: 0.3s;
          transform: scale(1.1);
        }
      }
    }
    > .box-title {
      font-size: 20px;
      font-weight: bold;
      margin: 0 0 8px 0;
    }
  }

  .linkBox {
    display: flex;
    width: 100%;
    flex-direction: column;
    > h3 {
      margin: 0 0 0px 0;
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
  }
`;

const ProjectContainer = () => {
  const [imgCount, setImgCount] = useState(0);
  const { param } = useSelector((state: RootState) => state.project);
  const page = param < 1 ? 0 : param - 1;
  const outletData = ProjectData[page];
  const imgBoxLength = outletData.images.length - 1;

  const handleClick = (btn: string) => {
    if (btn === "prev") {
      if (imgCount <= 0) setImgCount(imgBoxLength);
      else setImgCount((prev) => prev - 1);
    } else if (btn === "next") {
      if (imgCount >= imgBoxLength) setImgCount(0);
      else setImgCount((prev) => prev + 1);
    }
  };
  const createItem = (
    id: keyof ProjectModel,
    Tag: keyof JSX.IntrinsicElements
  ) => {
    const arrayData = outletData[id];
    if (Array.isArray(arrayData)) {
      return (
        <>
          {Tag === "img"
            ? arrayData?.map((item: string, index: number) => {
                return <img key={index} src={item} alt="img" />;
              })
            : arrayData?.map((item: string, index: number) => {
                return <Tag key={index}>{item}</Tag>;
              })}
        </>
      );
    }
  };

  return (
    <OutletContainer count={imgCount}>
      <Title title={outletData.title} />
      <div>{outletData.intro}</div>
      <ul>{createItem("implement", "li")}</ul>
      <div className="imageBox">{createItem("images", "img")}</div>
      <div className="imgControlBox">
        <button onClick={() => handleClick("prev")}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button onClick={() => handleClick("next")}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
      <div className="skillBox">
        <h3 className="box-title">Skills</h3>
        <div>{createItem("skill", "span")}</div>
      </div>
      <div className="descBox">
        <h3 className="box-title">Desc</h3>
        {createItem("desc", "p")}
      </div>
      <div className="linkBox">
        <h3>관련 링크</h3>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          <span>Github : </span>
          <a href={outletData.github} target="_blank" rel="noreferrer">
            {outletData.github}
          </a>
        </div>
        <div>
          <FontAwesomeIcon icon={faLink} />
          <span>Demo : </span>
          <a href={outletData.demo} target="_blank" rel="noreferrer">
            {outletData.demo}
          </a>
        </div>
      </div>
    </OutletContainer>
  );
};

export default ProjectContainer;
