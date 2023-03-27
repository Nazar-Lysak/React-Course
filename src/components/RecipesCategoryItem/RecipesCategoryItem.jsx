import styled from 'styled-components';

import varibles from '../../styles/varibles.scss';

import Image from '../../UI/Image/Image';
import Text from '../../UI/Text/Text';

const CardWrapper = styled.div`
  height: 453px;
  box-shadow: ${varibles.borderlighten};
  background: ${varibles.light};
  cursor: pointer;
  overflow: hidden;

  &:hover {
    img {
      transform: scale(1.03);
    }
  }
`;

const TextWrapper = styled.div`
  padding: 28px 10px 0;
`;

const RecipesCategoryItem = ({name, image, description, renderCategody}) => {
  return (
    <CardWrapper onClick={() => renderCategody(name)}>
      <Image img={process.env.PUBLIC_URL + image} alt={name} />
      <TextWrapper>
        <Text text={name} type={'h3'} textAlign={'center'} />
        <Text text={description} textAlign={'center'} />
      </TextWrapper>
    </CardWrapper>
  );
};

export default RecipesCategoryItem;
