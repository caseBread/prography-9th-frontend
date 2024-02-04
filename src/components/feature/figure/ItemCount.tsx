import styled from "styled-components";
import { useSelectedCategoryStore } from "../../../store/categoryStore";
import { useInfiniteScrollLimitStore } from "../../../store/limitStore";

type TProps = {
  className?: string;
};

const ItemCount: React.FC<TProps> = ({ className }) => {
  const { meals } = useSelectedCategoryStore();
  const { infiniteScrollLimit } = useInfiniteScrollLimitStore();

  const viewedLimit =
    infiniteScrollLimit < meals.length ? infiniteScrollLimit : meals.length;

  return (
    <StyledWrapper className={className}>
      {viewedLimit} / {meals.length} 개 조회
    </StyledWrapper>
  );
};

export default ItemCount;

const StyledWrapper = styled.div``;
