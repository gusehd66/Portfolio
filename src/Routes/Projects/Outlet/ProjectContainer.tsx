import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ProjectData } from "../../../assets/data/data";
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
  console.log(imgCount);
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

  return (
    <OutletContainer count={imgCount}>
      <h2>{outletData.title}</h2>
      <div>{outletData.intro}</div>
      <ul>
        {outletData.implement.map((impleData) => (
          <li>{impleData}</li>
        ))}
      </ul>
      <div className="imageBox">
        {outletData.images.map((img) => (
          <div>{img}</div>
        ))}
      </div>
      <div>
        <button onClick={() => handleClick("prev")}>Prev</button>
        <button onClick={() => handleClick("next")}>Next</button>
      </div>
      <div>
        {outletData.skill.map((skill) => (
          <span>{skill}</span>
        ))}
      </div>
      <div>
        {outletData.desc.map((desc) => (
          <p>{desc}</p>
        ))}
      </div>
      <div>{outletData.github}</div>
      <div>{outletData.demo}</div>
    </OutletContainer>
  );
};

export default ProjectContainer;
