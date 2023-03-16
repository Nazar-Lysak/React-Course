import styled, { css } from 'styled-components';
import todoVariables from '../../Styles/TodoVariables.scss';
import plus from './../../assets/icons/plus.svg';
import trash from './../../assets/icons/trash.svg';
import trash_h from './../../assets/icons/trash-h.svg';

const ButtonApply = styled.button`
  ${(props) =>
    props.type === 'add' &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      padding: 16px 38px 16px 16px;
      height: 52px;
      background: ${todoVariables.blue_dark};
      border-radius: 8px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 140%;
      color: ${todoVariables.gray_100};
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
        background: ${todoVariables.blue};
      }
    `}

  ${(props) =>
    props.type === 'delete' &&
    css`
      width: 24px;
      height: 24px;
      border-radius: 5px;
      position: absolute;
      right: 46px;
      top: 15px;
      cursor: pointer;
      transition: background-color .3s;
      background: inherit;
      background-image: url(${trash});

      &:hover {
        background-image: url(${trash_h});
        background-repeat: no-repeat;
        background-position: center;  
        background-color: ${todoVariables.gray_400};
      }
    `}
`;

export const Button = (props) => {
  return (
    <ButtonApply 
      type={props.type} 
      onClick={() => props.click({type: props.type, id: props.id, body: props.inputValue})}
    >{
      props.text}    
    </ButtonApply>
  )
};