import styled from "styled-components";
import { Meal } from "../../../type/meal";

type TProps = {
  className?: string;
  meal: Meal;
};

const FoodItem: React.FC<TProps> = ({ className, meal }) => {
  return (
    <StyledWrapper className={className}>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <span>{meal.strMeal}</span>
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
