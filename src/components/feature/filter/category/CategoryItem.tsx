import styled from "styled-components";
import { Category } from "../../../../type/category";
import useQueryParams from "../../../../hooks/useQueryParams";

type TProps = {
  className?: string;
  category: Category;
};

const CategoryItem: React.FC<TProps> = ({ className, category }) => {
  const { setQueryParam } = useQueryParams();

  const onClick = () => {
    setQueryParam("c", category.strCategory);
  };

  return (
    <StyledWrapper className={className} onClick={onClick}>
      {category.strCategory}
    </StyledWrapper>
  );
};

export default CategoryItem;

const StyledWrapper = styled.span`
  border: 1px solid #333;
  border-radius: 4px;
  padding: 4px 6px;
  text-align: center;

  &:hover {
    background: #f2f2f2;
  }
`;
