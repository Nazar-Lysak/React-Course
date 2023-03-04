import styled from 'styled-components';

import Image from '../../UI/Image/Image';
import Text from '../../UI/Text/Text';

const CardWrapper = styled.div`
  height: 453px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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

const RecipesCategoryItem = ({name, image, description}) => {
  return (
    <CardWrapper>
      <Image img={process.env.PUBLIC_URL + image} alt={name} />
      <TextWrapper>
        <Text text={name} type={'h3'} textAlign={'center'} />
        <Text text={description} textAlign={'center'} />
      </TextWrapper>
    </CardWrapper>
  );
};

export default RecipesCategoryItem;
