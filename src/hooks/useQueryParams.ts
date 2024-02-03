import { useNavigate, useLocation } from "react-router-dom";

const useQueryParams = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getQueryParam = (key: string): string | null => {
    const queryParams = new URLSearchParams(location.search);
    return queryParams.get(key);
  };

  const getQueryParams = (): URLSearchParams => {
    return new URLSearchParams(location.search);
  };

  const setQueryParam = (key: string, value: string): void => {
    const queryParams = getQueryParams();
    queryParams.set(key, value);
    navigate(`${location.pathname}?${queryParams.toString()}`, {
      replace: true,
    });
  };

  const removeQueryParam = (key: string): void => {
    const queryParams = getQueryParams();
    queryParams.delete(key);
    navigate(`${location.pathname}?${queryParams.toString()}`, {
      replace: true,
    });
  };

  return { getQueryParam, getQueryParams, setQueryParam, removeQueryParam };
};

export default useQueryParams;
