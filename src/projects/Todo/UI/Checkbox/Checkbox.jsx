import styled from 'styled-components';
import todoVariables from '../../Styles/TodoVariables.scss';

import checked from './../../assets/icons/checked.svg';

const Input = styled.div`
  position: absolute;
  left: 23px;
  top: 18px;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  border: solid 1px ${todoVariables.blue};
  cursor: pointer;

  &.active {
    background-color: ${todoVariables.blue};
    background-image: url(${checked});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const Checkbox = ({todo, doneTask}) => {

  return <Input className={todo.done && 'active'} onClick={() => doneTask(todo.id)} />;
};

export default Checkbox;
