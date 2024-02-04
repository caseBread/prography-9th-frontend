import styled from "styled-components";
import { Category } from "../../../../type/category";
import { useSelectedCategoryStore } from "../../../../store/categoryStore";
import useQueryParams from "../../../../hooks/useQueryParams";
import { QUERY_STORE } from "../../../../constants/queryStore";
import { toggleCategoryInQueryString } from "../util/toggleCategoryInQueryString";
import { useEffect, useState } from "react";

type TProps = {
  className?: string;
  category: Category;
};

const CategoryItem: React.FC<TProps> = ({ className, category }) => {
  const [isActive, setIsActive] = useState(false);
  const { categories, isCategoryExists, toggleCategory } =
    useSelectedCategoryStore();
  const { getQueryParam, setQueryParam } = useQueryParams();

  const onClick = () => {
    toggleCategory(category.strCategory);
    const queryStringCategory = getQueryParam(QUERY_STORE.CATEGORY) ?? "";

    const updatedQueryStringCategory = toggleCategoryInQueryString(
      queryStringCategory,
      category.strCategory
    );

    setQueryParam(QUERY_STORE.CATEGORY, updatedQueryStringCategory);
  };

  useEffect(() => {
    setIsActive(isCategoryExists(category.strCategory));
  }, [categories]);

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
