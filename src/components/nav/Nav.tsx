import styled from "styled-components";
import CategoryFilter from "../feature/filter/category/CategoryFilter";
import ItemCount from "../feature/figure/ItemCount";
import Dropdown from "../dropdown/Dropdown";
import useSortSizeStore from "../../store/sortStore";
import { useSelectedCategoryStore } from "../../store/categoryStore";
import useQueryParams from "../../hooks/useQueryParams";
import { QUERY_STORE } from "../../constants/queryStore";
import { MOBILE_SCREEN } from "../../constants/width";

type TProps = {
  className?: string;
};

const Nav: React.FC<TProps> = ({ className }) => {
  const { sortSizeList, setSelectedSortSize } = useSortSizeStore();
  const { sortTypeList, selectedSortType, setSelectedSortType } =
    useSelectedCategoryStore();
  const { setQueryParam } = useQueryParams();

  const handleSelectSortType = (sortType: string) => {
    setSelectedSortType(sortType);
    setQueryParam(QUERY_STORE.SORT_TYPE, sortType);
  };

  return (
    <StyledWrapper className={className}>
      <CategoryFilter />
      <div className="space-between">
        <ItemCount />
        <div className="space-between sort-wrapper">
          <Dropdown
            options={sortTypeList}
            onSelect={handleSelectSortType}
            defaultValue={selectedSortType}
          />
          <Dropdown
            className="mobile-hidden"
            options={sortSizeList}
            onSelect={setSelectedSortSize}
          />
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

  @media ${MOBILE_SCREEN} {
    .mobile-hidden {
      display: none;
    }
  }
`;
