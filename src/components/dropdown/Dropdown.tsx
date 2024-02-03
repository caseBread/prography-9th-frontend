import styled from "styled-components";

type TProps = {
  className?: string;
  options?: string[];
};

const Dropdown: React.FC<TProps> = ({ className, options }) => {
  return (
    <StyledWrapper className={className}>
      {options?.map((option) => {
        return <option value={option}>{option}</option>;
      })}
    </StyledWrapper>
  );
};

export default Dropdown;

const StyledWrapper = styled.select`
  padding: 4px 6px;
  border: 1px solid #666;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  &::after {
    content: " ⬇️";
  }
`;
