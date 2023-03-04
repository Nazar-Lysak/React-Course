import styled from 'styled-components';

import varibles from '../../styles/varibles.scss';

const H1 = styled.h1`
  font-family: ${varibles.quando};
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 30px;
  color: ${varibles.dark};
`;

const Logo = ({title}) => {
  return <H1>{title}</H1>;
};

export default Logo;
