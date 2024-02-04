import styled from "styled-components";

type TProps = {
  className?: string;
};

const CategorySkeletonItem: React.FC<TProps> = ({ className }) => {
  return <StyledWrapper className={className}></StyledWrapper>;
};

export default CategorySkeletonItem;

const StyledWrapper = styled.span`
  height: 27px;
  border: 1px solid #333;
  border-radius: 4px;
  /* padding: 4px 6px; */
  background: #f0f0f0;
`;
