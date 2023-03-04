import styled from 'styled-components';

const H1 = styled.h1`
  font-family: 'Quando';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 30px;
  color: #000000;
`;

const Logo = ({title}) => {
  return <H1>{title}</H1>;
};

export default Logo;
