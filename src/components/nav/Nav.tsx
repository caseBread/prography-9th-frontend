import styled from "styled-components";
import CategoryFilter from "../feature/filter/category/CategoryFilter";
import ItemCount from "../feature/figure/ItemCount";
import Dropdown from "../dropdown/Dropdown";
import useSortSizeStore from "../../store/sortStore";
import { useSelectedCategoryStore } from "../../store/categoryStore";

type TProps = {
  className?: string;
};

const Nav: React.FC<TProps> = ({ className }) => {
  const { sortSizeList, setSelectedSortSize } = useSortSizeStore();
  const { sortTypeList, setSelectedSortType } = useSelectedCategoryStore();

  return (
    <StyledWrapper className={className}>
      <CategoryFilter />
      <div className="space-between">
        <ItemCount />
        <div className="space-between sort-wrapper">
          <Dropdown options={sortTypeList} onSelect={setSelectedSortType} />
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
