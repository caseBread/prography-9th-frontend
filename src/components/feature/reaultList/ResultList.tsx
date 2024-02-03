import styled from "styled-components";
import FoodItem from "../food/FoodItem";

type TProps = {
  className?: string;
};

const ResultList: React.FC<TProps> = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <FoodItem />
      <FoodItem />
      <FoodItem />
      <FoodItem />
    </StyledWrapper>
  );
};

export default ResultList;

const StyledWrapper = styled.div`
  display: grid;
`;
