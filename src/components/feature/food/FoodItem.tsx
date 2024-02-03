import styled from "styled-components";

type TProps = {
  className?: string;
};

const FoodItem: React.FC<TProps> = ({ className }) => {
  return <StyledWrapper className={className}>FoodItem</StyledWrapper>;
};

export default FoodItem;

const StyledWrapper = styled.div``;
