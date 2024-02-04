import styled from "styled-components";
import FoodItem from "../food/FoodItem";
import { useSelectedCategoryStore } from "../../../store/categoryStore";
import useSortSizeStore from "../../../store/sortStore";
import { useInfiniteScroll } from "../../../hooks/useInfiniteScroll";
import { useInfiniteScrollLimitStore } from "../../../store/limitStore";
import { useEffect } from "react";
import { MOBILE_SCREEN } from "../../../constants/width";

const PAGE_SIZE = 20;

type TProps = {
  className?: string;
};

const ResultList: React.FC<TProps> = ({ className }) => {
  const { meals } = useSelectedCategoryStore();
  const { setInfiniteScrollLimit } = useInfiniteScrollLimitStore();
  const { selectedSortSize } = useSortSizeStore();
  const { limit } = useInfiniteScroll({
    initialLoad: PAGE_SIZE,
    step: PAGE_SIZE,
    totalItems: meals.length,
  });

  useEffect(() => {
    setInfiniteScrollLimit(limit);
  }, [limit]);

  return (
    <StyledWrapper className={className} gridSize={selectedSortSize}>
      {meals.slice(0, limit).map((meal) => {
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

  @media ${MOBILE_SCREEN} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
