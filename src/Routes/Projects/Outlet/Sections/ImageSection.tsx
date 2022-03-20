import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

const ImageContainer = styled.div<{ count: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  > .imageBox {
    width: 500px;
    height: 300px;
    display: flex;
    flex: 1 1 auto;
    overflow: hidden;
    box-sizing: border-box;
    box-shadow: 8px 8px 8px #555;
    border: 4px solid transparent;
    background-image: linear-gradient(#fff, #fff),
      linear-gradient(to right bottom, #888 0%, #222 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    > img {
      display: flex;
      width: 100%;
      height: 100%;
      min-width: 500px;
      position: relative;
      transition: 0.3s;
      transform: ${(props) => `translateX(-${500 * props.count}px)`};
      object-fit: contain;
    }
  }

  /* ImageControlButton */
  > .imgControlBox {
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
`;

const ImageSection = ({
  createItem,
  imgBoxLength,
}: {
  createItem: Function;
  imgBoxLength: number;
}) => {
  const [imgCount, setImgCount] = useState(0);

  const handleClick = (btn: string) => {
    if (btn === "prev") {
      if (imgCount <= 0) setImgCount(imgBoxLength);
      else setImgCount((prev) => prev - 1);
    } else if (btn === "next") {
      if (imgCount >= imgBoxLength) setImgCount(0);
      else setImgCount((prev) => prev + 1);
    }
  };

  return (
    <ImageContainer count={imgCount}>
      <div className="imageBox">{createItem("images", "img")}</div>
      <div className="imgControlBox">
        <button onClick={() => handleClick("prev")}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button onClick={() => handleClick("next")}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </ImageContainer>
  );
};

export default ImageSection;
