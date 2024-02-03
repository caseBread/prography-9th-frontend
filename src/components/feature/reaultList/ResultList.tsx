import styled from "styled-components";
import FoodItem from "../food/FoodItem";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useQueryParams from "../../../hooks/useQueryParams";
import { MealsResponse } from "../../../type/meal";
import { qs } from "../../../util/qs";

type TProps = {
  className?: string;
};

const ResultList: React.FC<TProps> = ({ className }) => {
  const { getQueryParam } = useQueryParams();
  const queryParamCategory = getQueryParam("c");

  const { data, isLoading, isError } = useQuery<MealsResponse>({
    queryKey: ["filter", queryParamCategory],
    queryFn: async () => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php${qs.stringURL({
          ...(queryParamCategory && { c: queryParamCategory }),
        })}`
      );
      return response.data;
    },
  });

  if (isLoading) return null;
  if (isError) return null;

  return (
    <StyledWrapper className={className}>
      {data?.meals?.map((meal) => {
        return <FoodItem key={meal.idMeal} meal={meal} />;
      })}
    </StyledWrapper>
  );
};

export default ResultList;

const StyledWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;
