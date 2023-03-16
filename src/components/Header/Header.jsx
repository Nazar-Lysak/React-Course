import styled from 'styled-components';

import varibles from '../../styles/varibles.scss';

import Logo from '../../UI/Logo/Logo';
import Navigation from '../Navigation/Navigation';

const HeaderWrap = styled.header`
  height: 10vh;
  background-color: ${varibles.light};
  filter: ${varibles.borderDarken};
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
        <Navigation links={['Home', 'List', 'Search','Todo-List', 'Tic-Tac-Toe', 'Pekemons']} />
      </AlignContainer>
    </HeaderWrap>
  );
};

export default Header;
