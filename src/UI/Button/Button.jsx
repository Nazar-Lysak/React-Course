import styled from 'styled-components';

import varibles from '../../styles/varibles.scss';

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
        return varibles.grey;
      case 'warning':
        return varibles.pink;
      default:
        return varibles.orange;
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
        return varibles.quando;
      case 'warning':
        return varibles.quando;
      default:
        return varibles.poppins;
    }
  }};
  font-style: normal;
  font-weight: ${(props) => {
    switch (props.type) {
      case 'card':
        return '400';
      case 'additional':
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
  color: ${varibles.light};
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
          return varibles.greyDark;
        case 'warning':
          return varibles.pinkDark;
        default:
          return varibles.orangeDark;
      }
    }};
  }

  bottom: 0;
  float: ${(props) => (props.position === 'right' ? 'right' : 'none')};
`;

const Button = (props) => {
  return (
    <Btn 
      type={props.type} 
      position={props.position} 
      onClick={() => {
        switch (props.title) {
          case 'Back':
            props.setActiveRecipe({});
            break;
          case 'Primary':
            console.log('Primary')
            break;
            case 'Additional':
            console.log('Additional')
            break;
            case 'Main':
            console.log('Main')
            break;
          case 'See Recipes':
            console.log('See Recipes')
            break;
          default:
            props.setActiveRecipe(props.recipe);
            break;
        }
      }}
    >
      {props.title}
    </Btn>
  );
};

export default Button;
