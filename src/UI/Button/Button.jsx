import styled from 'styled-components';

const Btn = styled.button`
  padding: ${(props) => {
    switch (props.type) {
      case 'additional':
        return '5px 24px';
      default:
        return '17px 47px';
    }
  }};
  background: ${(props) => {
    switch (props.type) {
      case 'additional':
        return '#b1afaf';
      case 'warning':
        return '#ff393999';
      default:
        return '#f8a607';
    }
  }};
  border-radius: ${(props) => {
    switch (props.type) {
      case 'card':
        return '0';
      case 'warning':
        return '0';
      case 'additional':
        return '50px';
      default:
        return '10px';
    }
  }};
  font-family: ${(props) => {
    switch (props.type) {
      case 'card':
        return 'Quando';
      case 'warning':
        return 'Quando';
      default:
        return 'Poppins';
    }
  }};
  font-style: normal;
  font-weight: ${(props) => {
    switch (props.type) {
      case 'card':
        return '400';
      case 'warning':
        return '400';
      default:
        return '700';
    }
  }};
  width: ${(props) => {
    switch (props.type) {
      case 'card':
        return '100%';
      case 'warning':
        return '227px';
      default:
        return '';
    }
  }};
  font-size: ${(props) => {
    switch (props.type) {
      case 'card':
        return '16px';
      case 'additional':
        return '12px';
      default:
        return '24px';
    }
  }};
  line-height: ${(props) => {
    switch (props.type) {
      case 'card':
        return '20px';
      case 'additional':
        return '15px';
      default:
        return '36px';
    }
  }};
  color: #ffffff;
  transition: 0.3s;
  position: ${(props) => {
    switch (props.type) {
      case 'card':
        return 'absolute';
      default:
        return 'static';
    }
  }};
  
  &:hover {
    background-color: ${(props) => {
      switch (props.type) {
        case 'additional':
          return '#7c7979';
        case 'warning':
          return '#f31b1b99';
        default:
          return '#f86507';
      }
    }};
  }

  bottom: 0;
  float: ${(props) => props.position === 'right' ? 'right' : 'none'};
`;

const Button = (props) => {
  return <Btn type={props.type} position={props.position}>{props.title}</Btn>;
};

export default Button;
