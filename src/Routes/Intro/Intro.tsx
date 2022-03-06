import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBookmark,
  faPhone,
  faAddressCard,
  faArrowPointer,
} from "@fortawesome/free-solid-svg-icons";
import ContentsBox from "../../component/Common/ContentsBox";
import { Certificate, Contact, Profile } from "../../data/data";
import { Container } from "../../styles/common";

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
  }

  @media screen and (max-width: 720px) {
    > img {
      width: 250px;
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
`;

const AboutMe = styled.div`
  width: 90%;
  height: 56px;
  font-size: 32px;
  display: flex;
  justify-content: left;
  align-items: center;
  position: relative;
  padding-left: 56px;
  margin-bottom: 30px;
  background-color: #ddd;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 60px;
    left: 0px;
    border-top: solid 4px #ddd;
    border-bottom: solid 4px #ddd;
  }
  > svg {
    color: #d8332d;
  }
  > p {
    margin-left: 40px;
  }
`;

const AboutBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;
`;

const Intro = () => {
  return (
    <IntroContainer>
      <div className="medal">
        <div className="hover-please">
          <FontAwesomeIcon icon={faArrowPointer} />
        </div>
        <img className="medal-item front" src="/pp_profile.jpg" alt="profile" />
        <div className="medal-item back">
          항상 어제보다 발전하는 프론트엔드 개발자가 되고 싶은 김현동입니다.
        </div>
      </div>
      <AboutMe>
        <FontAwesomeIcon icon={faBookmark} />
        <p>About Me</p>
      </AboutMe>
      <AboutBox>
        <ContentsBox
          icon={faPhone}
          index={1}
          title={"Contact"}
          data={Contact}
        />
        <ContentsBox icon={faUser} index={2} title={"Profile"} data={Profile} />
        <ContentsBox
          icon={faAddressCard}
          index={3}
          title={"Certificate"}
          data={Certificate}
        />
      </AboutBox>
    </IntroContainer>
  );
};

export default Intro;
