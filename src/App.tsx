import { BrowserRouter, Outlet } from "react-router-dom";
import styled from "styled-components";
import Main from "./component/Main";
import NavBar from "./component/NavBar";

const AppContainer = styled.div`
  display: flex;
  width: "100vw";
  box-sizing: border-box;
  max-width: 100%;
`;

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <NavBar />
        <Main />
        <Outlet />
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
