import styled from "styled-components";

type TProps = {
  className?: string;
};

const CategoryFilter: React.FC<TProps> = ({ className }) => {
  return <StyledWrapper className={className}>CategoryFilter</StyledWrapper>;
};

export default CategoryFilter;

const StyledWrapper = styled.div``;
