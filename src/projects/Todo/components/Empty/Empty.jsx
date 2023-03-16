import styled from 'styled-components';
import todoVariables from '../../Styles/TodoVariables.scss';

import Text from '../../UI/Text/Text';
import clipboard from './../../assets/icons/clipboard.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  gap: 8px;
  border-top: 1px solid ${todoVariables.gray_400};
  border-radius: 8px;
`;

const Empty = () => {

  return (
    <Wrapper>
        <img style={{marginBottom: '10px'}} src={clipboard} alt="Clipboard" />
        <Text text={'Your Todo List Is Empty'} color={todoVariables.gray_300} />
        <Text text={'Your Shoud Add Atleast One Task'} color={todoVariables.gray_300} />
    </Wrapper>
  )
};

export default Empty;
