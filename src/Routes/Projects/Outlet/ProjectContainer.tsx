import { useCallback } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ProjectData, ProjectModel } from "../../../assets/data/data";
import { Link } from "react-router-dom";
import Title from "../../../component/Common/Title";
import { RootState } from "../../../redux/store/store";
import ImageSection from "./Sections/ImageSection";
import LinkSection from "./Sections/LinkSection";

const OutletContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  > h4 {
    margin: 0;
  }
  > .links {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 60px;
    text-align: left;
    > h3 {
      margin: 0;
      text-align: center;
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

const ProjectContainer = () => {
  const { param } = useSelector((state: RootState) => state.project);
  const page = param < 1 ? 0 : param - 1;
  const outletData = ProjectData[page];
  const imgBoxLength = outletData.images.length - 1;

  const createItem: Function = useCallback(
    (id: keyof ProjectModel, Tag: keyof JSX.IntrinsicElements) => {
      const arrayData = outletData[id];
      if (Array.isArray(arrayData)) {
        return (
          <>
            {arrayData?.map((item: string, index: number) =>
              Tag === "img" ? (
                <img key={index} src={item} alt="img" />
              ) : (
                <Tag key={index}>{item}</Tag>
              )
            )}
          </>
        );
      }
    },
    [outletData]
  );

  return (
    <OutletContainer>
      <div className="links">
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
      </div>
      <Title title={outletData.title} />
      <h4>{outletData.intro}</h4>
      <ul>{createItem("implement", "li")}</ul>
      <ImageSection createItem={createItem} imgBoxLength={imgBoxLength} />
      <div className="skillBox">
        <h3 className="box-title">Skills</h3>
        <div>{createItem("skill", "span")}</div>
      </div>
      <div className="descBox">
        <h3 className="box-title">Desc</h3>
        {createItem("desc", "p")}
      </div>
      <LinkSection github={outletData.github} demo={outletData.demo} />
    </OutletContainer>
  );
};

export default ProjectContainer;
