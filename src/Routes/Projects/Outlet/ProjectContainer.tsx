import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ProjectData, ProjectModel } from "../../../assets/data/data";
import { RootState } from "../../../redux/store/store";

const OutletContainer = styled.div<{ count: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  > .imageBox {
    width: 300px;
    height: 300px;
    border: solid 1px #000;
    display: flex;
    flex: 1 1 1;
    overflow: hidden;
    > div {
      display: flex;
      width: 100%;
      height: 100%;
      min-width: 300px;
      position: relative;
      transform: ${(props) => `translateX(-${300 * props.count}px)`};
    }
  }
`;

const ProjectContainer = () => {
  const [imgCount, setImgCount] = useState(0);
  const { param } = useSelector((state: RootState) => state.project);
  const page = param < 1 ? 0 : param - 1;
  const outletData = ProjectData[page];

  const handleClick = (btn: string) => {
    if (btn === "prev") {
      if (imgCount <= 0) setImgCount(3);
      else setImgCount((prev) => prev - 1);
    } else if (btn === "next") {
      if (imgCount >= 3) setImgCount(0);
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
          {arrayData?.map((item: string, index: number) => {
            return <Tag key={index}>{item}</Tag>;
          })}
        </>
      );
    }
  };

  return (
    <OutletContainer count={imgCount}>
      <h2>{outletData.title}</h2>
      <div>{outletData.intro}</div>
      <ul>{createItem("implement", "li")}</ul>
      <div className="imageBox">{createItem("images", "div")}</div>
      <div>
        <button onClick={() => handleClick("prev")}>Prev</button>
        <button onClick={() => handleClick("next")}>Next</button>
      </div>
      <div>{createItem("skill", "span")}</div>
      <div>{createItem("desc", "p")}</div>
      <div>{outletData.github}</div>
      <div>{outletData.demo}</div>
    </OutletContainer>
  );
};

export default ProjectContainer;
