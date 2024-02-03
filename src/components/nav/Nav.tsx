import styled from "styled-components";
import CategoryFilter from "../feature/filter/category/CategoryFilter";
import ItemCount from "../feature/figure/ItemCount";
import Dropdown from "../dropdown/Dropdown";

type TProps = {
  className?: string;
};

export const SORT_TYPE_LIST = ["이름 내림차순", "이름 오름차순"];

export const SORT_SIZE_LIST = ["2개씩 보기", "4개씩 보기"];

const Nav: React.FC<TProps> = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <CategoryFilter />
      <div className="space-between">
        <ItemCount />
        <div className="space-between sort-wrapper">
          <Dropdown options={SORT_TYPE_LIST} />
          <Dropdown options={SORT_SIZE_LIST} />
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Nav;

const StyledWrapper = styled.nav`
  margin-bottom: 24px;

  .space-between {
    display: flex;
    justify-content: space-between;
    gap: 4px;
  }
`;
