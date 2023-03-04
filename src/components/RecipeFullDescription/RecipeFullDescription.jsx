import styled from 'styled-components';

import RecipeIngredientsList from '../RecipeIngredientsList/RecipeIngredientsList';
import Button from '../../UI/Button/Button';

const DetilesWrap = styled.div`
  padding: 18px 52px 18px 32px;
  box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.15);
  background: #FFFFFF;
  width: 100%;
  min-height: 850px;
`;

const AdditionalDescription = styled.div`
  background: #FFC759;  
  padding: 52px 69px 70px 59px;
  margin 10px 0 15px;

  p {
    font-family: 'Quando';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    color: rgba(0, 0, 0, 0.72);
  }
`;

const RecipeFullDescription = ({data}) => {

  console.log(data[0].items[0].recipe)
  return (
    <DetilesWrap>
        <RecipeIngredientsList data={data} />
        <AdditionalDescription>
          <p>{data[0].items[0].recipe}</p>
        </AdditionalDescription>
        <Button title={'Back'} type={'warning'} position={'right'} />
    </DetilesWrap>
  )
};

export default RecipeFullDescription;
