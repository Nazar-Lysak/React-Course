import styled from 'styled-components';

import Logo from '../../UI/Logo/Logo';
import Navigation from '../Navigation/Navigation';

const HeaderWrap = styled.header`
  height: 10vh;
  background-color: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AlignContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Header = () => {
  return (
    <HeaderWrap>
      <AlignContainer className="wrapperM">
        <Logo title={'Recipe'} />
        <Navigation links={['Home', 'List', 'Search']} />
      </AlignContainer>
    </HeaderWrap>
  );
};

export default Header;
