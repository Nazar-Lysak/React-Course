import styled from 'styled-components';

import varibles from '../../styles/varibles.scss';

import Image from '../../UI/Image/Image';
import Button from '../../UI/Button/Button';

const CardWrapper = styled.div`
  height: 331px;
  background: ${varibles.light};
  box-shadow: ${varibles.borderlighten};
  position: relative;
`;

const AdditionalOptions = styled.div`
  padding: 17px 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
`;

const RecipeCard = ({recipe, setActiveRecipe}) => {
  return (
    <CardWrapper>
      <Image img={process.env.PUBLIC_URL + recipe.image} alt={'Yummy Recipes'} />
      <AdditionalOptions>
        <Button type={'additional'} title={'Primary'}  />
        <Button type={'additional'} title={'Additional'} />
        <Button type={'additional'} title={'Main'} />
      </AdditionalOptions>
      <Button type={'card'} title={'Show details'} setActiveRecipe={setActiveRecipe} recipe={recipe} />
    </CardWrapper>
  );
};

export default RecipeCard;
