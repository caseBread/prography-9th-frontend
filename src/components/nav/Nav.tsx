import styled from "styled-components";
import CategoryFilter from "../feature/filter/CategoryFilter";
import SortFilter from "../feature/filter/SortFilter";
import PageSizeFilter from "../feature/filter/PageSizeFilter";
import ItemCount from "../feature/figure/ItemCount";

type TProps = {
  className?: string;
};

const Nav: React.FC<TProps> = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <CategoryFilter />
      <div className="space-between">
        <ItemCount />
        <div className="space-between">
          <SortFilter />
          <PageSizeFilter />
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Nav;

const StyledWrapper = styled.nav`
  .space-between {
    display: flex;
    justify-content: space-between;
  }
`;
