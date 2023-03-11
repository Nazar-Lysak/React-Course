import styled from 'styled-components';

import Logo from "../../UI/Logo/Logo";

const Wrapper = styled.header`
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0D0D0D;
`

const Header = () => {
  return (
    <Wrapper>
        <Logo />
    </Wrapper>
  );
};

export default Header;
