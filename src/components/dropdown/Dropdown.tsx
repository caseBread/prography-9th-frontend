import styled from "styled-components";

export type TDropdown = {
  value: string;
  label: React.ReactNode;
};

type TProps = {
  className?: string;
  options: {
    value: string;
    label: React.ReactNode;
  }[];
  onSelect: (option: string) => void;
  defaultValue?: string;
};

const Dropdown: React.FC<TProps> = ({
  className,
  options,
  onSelect,
  defaultValue,
}) => {
  return (
    <StyledWrapper
      className={className}
      onChange={(e) => onSelect(e.currentTarget.value)}
    >
      {options.map((option) => {
        return (
          <option
            key={option.value}
            value={option.value}
            selected={defaultValue === option.value}
          >
            {option.label}
          </option>
        );
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
