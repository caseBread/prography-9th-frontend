import styled from "styled-components";
import { Meal } from "../../../store/categoryStore";

type TProps = {
  className?: string;
  meal: Meal;
};

const FoodItem: React.FC<TProps> = ({ className, meal }) => {
  return (
    <StyledWrapper className={className}>
      <img src={meal.thumbnail} alt={meal.name} loading="lazy" />
      <span>{meal.name}</span>
    </StyledWrapper>
  );
};

export default FoodItem;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  img {
    border-radius: 16px;
    width: 100%;
  }

  span {
    padding: 4px;
  }
`;
