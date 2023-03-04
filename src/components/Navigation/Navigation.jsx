import styled from 'styled-components';

import varibles from '../../styles/varibles.scss';

const Ul = styled.ul`
  display: flex;
  gap: 10px;
`;

const Li = styled.li`
  font-family: ${varibles.quando};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${varibles.dark};
  text-transform: uppercase;
  cursor: pointer;
`;

const Navigation = ({links}) => {
  return (
    <Ul>
      {links.map((link, index) => (
        <Li key={index}>{link}</Li>
      ))}
    </Ul>
  );
};

export default Navigation;
