import styled from "styled-components";

type TProps = {
  className?: string;
};

const PageSizeFilter: React.FC<TProps> = ({ className }) => {
  return <StyledWrapper className={className}>PageSizeFilter</StyledWrapper>;
};

export default PageSizeFilter;

const StyledWrapper = styled.div``;
