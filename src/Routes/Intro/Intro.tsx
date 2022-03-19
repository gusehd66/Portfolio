import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faAddressCard,
  faArrowPointer,
} from "@fortawesome/free-solid-svg-icons";
import IntroContentsBox from "./Sections/IntroContentsBox";
import { Certificate, Contact, Profile } from "../../assets/data/data";
import Container from "../../component/Common/Container";
import profile from "../../assets/img/pp_profile.jpg";
import { RefObject } from "react";
import NextPageBtn from "../../component/Common/NextPageBtn";
import Title from "../../component/Common/Title";

export const IntroContainer = styled(Container)`
  > .medal {
    position: relative;
    margin-bottom: 32px;
    border-radius: 50%;
    .hover-please {
      position: absolute;
      bottom: 0;
      right: 0;
      animation: pong 1s ease-in-out infinite alternate;
      &::after {
        content: "hover!";
        width: 12px;
        height: 12px;
        font-size: 8px;
        color: #000;
      }
    }
    > .medal-item {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      box-shadow: 5px 5px 20px #666;
      transition: 1s;
      backface-visibility: hidden;
    }
    > .front {
      transform: rotateY(0deg);
      position: absolute;
    }
    > .back {
      transform: rotateY(-180deg);
      background-color: #222;
      color: #fff;
      font-size: 18px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-weight: 600;
    }
    &:hover {
      > .front {
        transform: rotateY(-180deg);
      }
      > .back {
        transform: rotateY(0deg);
      }
    }

    @media screen and (max-width: 720px) {
      > .medal-item {
        width: 250px;
        height: 250px;
      }
    }

    @keyframes pong {
      0% {
        bottom: 0px;
      }
      100% {
        bottom: 5px;
      }
    }
  }
`;

const AboutBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;
`;

interface Props {
  nodeRef: RefObject<HTMLInputElement>;
}

const Intro = ({ nodeRef }: Props) => {
  return (
    <IntroContainer ref={nodeRef}>
      <div className="medal">
        <div className="hover-please">
          <FontAwesomeIcon icon={faArrowPointer} />
        </div>
        <img className="medal-item front" src={profile} alt="profile" />
        <div className="medal-item back">
          항상 어제보다 발전하는 프론트엔드 개발자가 되고 싶은 김현동입니다.
        </div>
      </div>
      <Title title={"About Me"} />
      <AboutBox>
        <IntroContentsBox
          icon={faPhone}
          index={1}
          title={"Contact"}
          data={Contact}
        />
        <IntroContentsBox
          icon={faUser}
          index={2}
          title={"Profile"}
          data={Profile}
        />
        <IntroContentsBox
          icon={faAddressCard}
          index={3}
          title={"Certificate"}
          data={Certificate}
        />
      </AboutBox>
      <NextPageBtn link={"/skill-career"} />
    </IntroContainer>
  );
};

export default Intro;
