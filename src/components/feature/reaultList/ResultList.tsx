import styled from "styled-components";
import FoodItem from "../food/FoodItem";
import { useSelectedCategoryStore } from "../../../store/categoryStore";
import useSortSizeStore from "../../../store/sortStore";

type TProps = {
  className?: string;
};

const ResultList: React.FC<TProps> = ({ className }) => {
  const { meals } = useSelectedCategoryStore();
  const { selectedSortSize } = useSortSizeStore();

  return (
    <StyledWrapper className={className} gridSize={selectedSortSize}>
      {meals.map((meal) => {
        return <FoodItem key={meal.name} meal={meal} />;
      })}
    </StyledWrapper>
  );
};

export default ResultList;

const StyledWrapper = styled.div<{ gridSize: string }>`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(${({ gridSize }) => gridSize}, 1fr);
  gap: 16px;
`;
