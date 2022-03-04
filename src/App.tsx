import { BrowserRouter } from "react-router-dom";
import Main from "./component/Main";
import NavBar from "./component/NavBar";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <BrowserRouter>
        <NavBar />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
