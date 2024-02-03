import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { MealsResponse } from "../../../type/meal";
import useQueryParams from "../../../hooks/useQueryParams";
import axios from "axios";
import { qs } from "../../../util/qs";

type TProps = {
  className?: string;
};

const ItemCount: React.FC<TProps> = ({ className }) => {
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
      20 / {data?.meals?.length} 개 조회
    </StyledWrapper>
  );
};

export default ItemCount;

const StyledWrapper = styled.div``;
