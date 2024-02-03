import styled from "styled-components";

type TProps = {
  className?: string;
};

const SortFilter: React.FC<TProps> = ({ className }) => {
  return <StyledWrapper className={className}>SortFilter</StyledWrapper>;
};

export default SortFilter;

const StyledWrapper = styled.div``;
