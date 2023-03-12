import styled from 'styled-components';
import todoVariables from '../../Styles/TodoVariables.scss';

import Text from '../../UI/Text/Text';
import Checkbox from '../../UI/Checkbox/Checkbox';
import {Button} from '../../UI/Button/Button';

const Wrapper = styled.div`
  box-sizing: border-box;  
  padding: 16px 92px 16px 52px;
  width: 100%;
  min-height: 52px;
  background: ${todoVariables.grey_500};
  border: 1px solid ${todoVariables.gray_400};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  margin-bottom: 12px;
  position: relative;
`;

const Task = ({removeTask, todo, doneTask}) => {
  return (
    <Wrapper>
      <Checkbox todo={todo} doneTask={doneTask} />
      <Text
        text={todo.body}
        done={todo.done}
      />
      <Button type={'delete'} click={removeTask} id={todo.id} />
    </Wrapper>
  );
};

export default Task;
