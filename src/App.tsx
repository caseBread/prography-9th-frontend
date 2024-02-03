import styled from "styled-components";
import Header from "./components/header";
import Main from "./components/main/Main";

function App() {
  return (
    <StyledWrapper>
      <Header />
      <div className="main-container">
        <Main />
      </div>
    </StyledWrapper>
  );
}

export default App;

const StyledWrapper = styled.div`
  .main-container {
    padding-top: 60px;
  }
`;
