import styled from 'styled-components';
import todoVariables from '../../Styles/TodoVariables.scss';

import Text from '../../UI/Text/Text';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 25px;
`;

const Num = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px 8px;
  background: ${todoVariables.gray_400};
  border-radius: 999px;
  color: ${todoVariables.gray_200};
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  margin-left: 8px;
  margin-top: 0;
`;

const Tasktracker = ({todos}) => {
  return (
    <Wrapper>
      <div style={{display: 'flex'}}>
        <Text text={'All tasks'} bold color={todoVariables.blue} /> <Num>{todos.length}</Num>
      </div>
      <div style={{display: 'flex'}}>
        <Text text={'Done'} bold color={todoVariables.purple} /> <Num>{todos.filter(el => el.done).length} of {todos.length}</Num>
      </div>
    </Wrapper>
  );
};

export default Tasktracker;
