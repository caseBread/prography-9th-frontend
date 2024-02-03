import styled from "styled-components";
import { useSelectedCategoryStore } from "../../../store/categoryStore";

type TProps = {
  className?: string;
};

const ItemCount: React.FC<TProps> = ({ className }) => {
  const { meals } = useSelectedCategoryStore();

  // TODO : 무한스크롤구현시 20은 바뀌어야함.
  return (
    <StyledWrapper className={className}>
      20 / {meals?.length} 개 조회
    </StyledWrapper>
  );
};

export default ItemCount;

const StyledWrapper = styled.div``;
