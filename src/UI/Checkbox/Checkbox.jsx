import { useState } from 'react';

import styled from 'styled-components';

const Input = styled.input`
  position: absolute;
  right: 20px;
  height: 20px;
  width: 20px;
`;

const Checkbox = (props) => {

  const [isChecked, setIsChecked] = useState(false);

    return (
      <Input 
        type="checkbox" 
        checked={isChecked} 
        onChange={() => {
          setIsChecked(!isChecked);
          props.setActiveElements(() => {
            return !isChecked 
            ? [...props.activeElements, props.index] 
            : props.activeElements.filter(el => el !== props.index)
          })
        }} 
      />
    )
};

export default Checkbox;
