import styled from 'styled-components';

import todoVariables from '../../Styles/TodoVariables.scss';

const InputField = styled.input`
  width: 100%;
  height: 54px;
  background: ${todoVariables.gray_500};
  border: 1px solid ${todoVariables.gray_700};
  border-radius: 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: ${todoVariables.gray_300};
  padding: 16px;

  &:focus {
    border: solid 1px ${todoVariables.purple_dark};
  }
`;

const Input = ({getTextInput, inputValue}) => {
  return <InputField type="text" value={inputValue} placeholder={'Enter Your Task...'}  onChange={(e) => getTextInput(e.target.value)} />;
};

export default Input;
