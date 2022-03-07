import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Contents = styled.div`
  width: 100%;
  margin: 20px;
  height: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  > .contents-title {
    width: 350px;
    height: 50px;
    font-size: 32px;
    font-weight: 800;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ee8574;
    padding: 8px 16px;
  }
  > .contents-details {
    font-size: 24px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    position: relative;
    > li {
      margin: 0;
      font-weight: 600;
      > a {
        text-decoration: none;
        color: #000;
      }
      span {
        font-weight: 400;
      }
      &:hover {
        a::before {
          content: "🔗";
          position: absolute;
          left: 0;
        }
        a::after {
          content: "클릭하면 링크로 이동합니다.";
          position: relative;
          color: #666;
          left: 10px;
          font-size: 12px;
        }
        span {
          color: #ee8574;
        }
      }
    }
  }
  @media screen and (max-width: 720px) {
    min-height: 240px;
    > .contents-title {
      width: 250px;
      height: 40px;
      font-size: 24px;
      padding: 8px 16px;
    }
    > .contents-details {
      padding-left: 20px;
      font-size: 20px;
      > li:hover {
        a::before {
          left: -10px;
        }
        a::after {
          content: "";
        }
      }
    }
  }
`;

interface UserModel {
  id: string;
  value: string;
}

// 받을 props 타입
interface Props {
  icon: IconProp;
  index: number;
  title: string;
  data: Array<UserModel>;
}

const ContentsBox = (props: Props) => {
  return (
    <Contents>
      <div className="contents-title">
        <p>
          {props.index}. {props.title}
        </p>
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <ul className="contents-details">
        {props.data.map((user) => (
          <li key={user.id}>
            {user.id === "Github" || user.id === "Blog" ? (
              <a target="_blank" rel="noopener noreferrer" href={user.value}>
                {user.id} | <span>{user.value}</span>
              </a>
            ) : (
              <>
                {user.id} | <span>{user.value}</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </Contents>
  );
};

export default ContentsBox;
