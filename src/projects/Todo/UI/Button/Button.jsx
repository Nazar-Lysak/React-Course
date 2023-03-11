import styled from 'styled-components';

import plus from './../../assets/icons/plus.svg';

const ButtonApply = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 16px 38px 16px 16px;
    height: 52px;
    background: #1E6F9F;
    border-radius: 8px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 140%;
    color: #F2F2F2;
    transition: .3s; 
    position: relative;  
    white-space: nowrap;
    
    &::after {
        content: "";
        position: absolute;
        top: 18px;
        right: 12px;
        width: 16px;
        height: 16px;
        background-image: url(${plus});
    }

    &:hover {
        background: #4EA8DE;
    }
`

export const Button = () => {
  return (
    <ButtonApply>Add Todo</ButtonApply>
  )
};
