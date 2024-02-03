import styled from "styled-components";
import CategoryFilter from "../feature/filter/category/CategoryFilter";
import ItemCount from "../feature/figure/ItemCount";
import Dropdown, { TDropdown } from "../dropdown/Dropdown";
import useSortSizeStore from "../../store/sortStore";

type TProps = {
  className?: string;
};

export const SORT_TYPE_LIST: TDropdown[] = [
  { label: "이름 내림차순", value: "desc" },
  { label: "이름 오름차순", value: "asc" },
];

const Nav: React.FC<TProps> = ({ className }) => {
  const { sortSizeList, setSelectedSortSize } = useSortSizeStore();

  return (
    <StyledWrapper className={className}>
      <CategoryFilter />
      <div className="space-between">
        <ItemCount />
        <div className="space-between sort-wrapper">
          <Dropdown options={SORT_TYPE_LIST} />
          <Dropdown options={sortSizeList} onSelect={setSelectedSortSize} />
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
