import styled from "styled-components";
import { Category } from "../../../../type/category";
import { useSelectedCategoryStore } from "../../../../store/categoryStore";

type TProps = {
  className?: string;
  category: Category;
};

const CategoryItem: React.FC<TProps> = ({ className, category }) => {
  const { isCategoryExists, toggleCategory } = useSelectedCategoryStore();

  const onClick = () => {
    toggleCategory(category.strCategory);
  };

  const isActive = isCategoryExists(category.strCategory);

  return (
    <StyledWrapper className={className} onClick={onClick} isActive={isActive}>
      {category.strCategory}
    </StyledWrapper>
  );
};

export default CategoryItem;

const StyledWrapper = styled.span<{ isActive: boolean }>`
  border: 1px solid #333;
  border-radius: 4px;
  padding: 4px 6px;
  text-align: center;

  background-color: ${(props) => (props.isActive ? "#ADD8E6" : "transparent")};

  &:active {
    transform: scale(0.98);
  }

  &:hover {
    ${(props) => (props.isActive ? "#ADD8E6" : "#f2f2f2")}
  }
`;
