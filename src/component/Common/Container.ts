import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 40px 60px 40px;
  position: relative;
  margin-left: 3px;
  border-left: solid 2px #444;
  min-height: 100vh;
  box-sizing: border-box;

  @media screen and (max-width: 720px) {
    padding: 40px 30px 40px;
  }
`;

export default Container;
