import styled from 'styled-components';

const InputField = styled.input`
  width: 100%;
  height: 54px;
  background: #262626;
  border: 1px solid #0D0D0D;
  border-radius: 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #808080;
  padding: 16px;

  &:focus {
    border: solid 1px #5E60CE;
  }
`

const Input = () => {
  return (
    <InputField type="text" />
  )
};

export default Input;
