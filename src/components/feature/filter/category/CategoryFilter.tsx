import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import styled from "styled-components";
import { CategoriesResponse } from "../../../../type/category";
import CategoryItem from "./CategoryItem";
import CategorySkeletonItem from "./CategorySkeletonItem";

const SKELETON_SIZE = 14;

type TProps = {
  className?: string;
};

const CategoryFilter: React.FC<TProps> = ({ className }) => {
  const { data, isLoading, isError } = useQuery<CategoriesResponse>({
    queryKey: ["category"],
    queryFn: async () => {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      return response.data;
    },
  });

  if (isLoading) {
    // 로딩 중일 때 스켈레톤 표시
    return (
      <StyledWrapper className={className}>
        {Array.from({ length: SKELETON_SIZE }).map((_, index) => (
          <CategorySkeletonItem />
        ))}
      </StyledWrapper>
    );
  }

  if (isError) return null;

  return (
    <StyledWrapper className={className}>
      {data?.categories.map((category) => {
        return <CategoryItem key={category.idCategory} category={category} />;
      })}
    </StyledWrapper>
  );
};

export default CategoryFilter;

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
  padding: 10px;

  margin-bottom: 24px;
`;
