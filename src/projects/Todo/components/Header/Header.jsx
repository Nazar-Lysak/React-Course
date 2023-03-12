import styled from 'styled-components';
import todoVariables from '../../Styles/TodoVariables.scss';

import Logo from '../../UI/Logo/Logo';

const Wrapper = styled.header`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${todoVariables.gray_700};
`;

const Header = () => {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
};

export default Header;
