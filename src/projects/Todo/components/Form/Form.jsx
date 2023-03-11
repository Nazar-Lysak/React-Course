import styled from 'styled-components';

import Input from '../../UI/Input/Input';
import { Button } from '../../UI/Button/Button';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    position: relative;
    top: -27px;
`;

const Form = () => {
  return (
    <Wrapper>
        <Input />
        <Button />
    </Wrapper>
  )
};

export default Form;
