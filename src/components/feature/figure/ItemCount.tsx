import styled from "styled-components";

type TProps = {
  className?: string;
};

const ItemCount: React.FC<TProps> = ({ className }) => {
  return <StyledWrapper className={className}>ItemCount</StyledWrapper>;
};

export default ItemCount;

const StyledWrapper = styled.div``;
