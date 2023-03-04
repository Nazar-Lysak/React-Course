import styled from 'styled-components';

import Image from '../../UI/Image/Image';
import Button from '../../UI/Button/Button';

const CardWrapper = styled.div`
  height: 331px;
  background: #ffffff;
  box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.15);
  position: relative;
`;

const AdditionalOptions = styled.div`
  padding: 17px 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
`;

const RecipeCard = ({recipe}) => {
  return (
    <CardWrapper>
      <Image img={process.env.PUBLIC_URL + recipe.image} alt={'Yummy Recipes'} />
      <AdditionalOptions>
        <Button type={'additional'} title={'Primary'} />
        <Button type={'additional'} title={'Additional'} />
        <Button type={'additional'} title={'Main'} />
      </AdditionalOptions>
      <Button type={'card'} title={'Show details'} />
    </CardWrapper>
  );
};

export default RecipeCard;
