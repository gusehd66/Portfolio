import styled from "styled-components";
import { CareerModel } from "../../../assets/data/data";

const CareerContainer = styled.div`
  display: flex;
  flex-direction: column;
  > h1 {
    margin: 10px 0;
  }
  > h4 {
    margin: 0 0 30px;
    color: #555;
  }
  > .career-contents {
    display: flex;
    flex-direction: column;
    &:nth-of-type(1) {
      margin-bottom: 10px;
    }
    > .career-title {
      font-size: 24px;
      font-weight: 600;
    }
    > .career-desc {
      font-size: 20px;
    }
  }
`;

const Career = ({ data }: { data: Array<CareerModel> }) => {
  return (
    <CareerContainer>
      <h1>인우아이티</h1>
      <h4>( 2020/10/05 ~ 2021/01/05 )</h4>
      {data.map((items) => (
        <div key={items.id} className="career-contents">
          <span className="career-title">{items.id}</span>
          {items.value.map((desc, i) => (
            <span key={i} className="career-desc">
              {desc}
            </span>
          ))}
        </div>
      ))}
    </CareerContainer>
  );
};

export default Career;
