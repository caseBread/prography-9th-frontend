import styled from "styled-components";

type TProps = {
  className?: string;
};

const Header: React.FC<TProps> = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <div className="header-items">
        <img src="gnb.png" alt="로고" width="100" />
      </div>
    </StyledWrapper>
  );
};

export default Header;

const StyledWrapper = styled.header`
  position: fixed;
  display: flex;
  width: 100%;

  .header-items {
    padding: 12px 16px;
    display: flex;
  }
`;
