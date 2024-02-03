import styled from "styled-components";
import Nav from "../nav/Nav";
import ResultList from "../feature/reaultList/ResultList";
import { MAIN_CONTAINER_WIDTH } from "../../constants/width";

type TProps = {
  className?: string;
};

const Main: React.FC<TProps> = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <Nav />
      <ResultList />
    </StyledWrapper>
  );
};

export default Main;

const StyledWrapper = styled.main`
  margin: 0 auto;
  max-width: ${MAIN_CONTAINER_WIDTH}px;
`;
