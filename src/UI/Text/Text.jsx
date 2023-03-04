import styled from 'styled-components';

const Text = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  width: 100%;
  text-align: ${(props) => {
    return props.textAlign === 'center' ? 'center' : 'left';
  }};
  font-weight: ${(props) => {
    switch (props.type) {
      case 'h2':
        return '700';
      case 'p':
        return '400';
      default:
        return '400';
    }
  }};
  font-size: ${(props) => {
    switch (props.type) {
      case 'h2':
        return '32px';
      case 'p':
        return '24px';
      default:
        return '24px';
    }
  }};
  line-height: ${(props) => {
    switch (props.type) {
      case 'h2':
        return '48px';
      case 'p':
        return '36px';
      default:
        return '36px';
    }
  }};
  color: ${(props) => {
    switch (props.type) {
      case 'h2':
        return '#000000';
      case 'h3':
        return '#000000';
      case 'p':
        return 'rgba(0, 0, 0, 0.5)';
      default:
        return 'rgba(0, 0, 0, 0.5)';
    }
  }};
  margin-bottom: 9px;
`;

const HeaddingText = (props) => {
  return (
    <Text type={props.type} textAlign={props.textAlign}>
      {props.text}
    </Text>
  );
};

export default HeaddingText;
