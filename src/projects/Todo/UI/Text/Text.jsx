import styled from 'styled-components';
import todoVariables from '../../Styles/TodoVariables.scss';

const Paragraph = styled.p`
  color: ${(props) => {
    switch (props.color || true) {
      case props.color:
        return props.color;
      case props.done:
        return todoVariables.gray_300;
      default:
        return todoVariables.gray_100;
    }
  }};
  text-decoration: ${(props) => (props.done ? 'line-through' : 'none')};
  font-weight: ${(props) => (props.bold ? '700' : '400')};
  font-size: 14px;
  line-height: 19px;
  transition: .2s;
`;

const Text = (props) => {
  return (
    <Paragraph bold={props.bold} done={props.done} color={props.color}>
      {props.text}
    </Paragraph>
  );
};

export default Text;
