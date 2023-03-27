import styled from 'styled-components';

import RecipeCard from '../../components/RecipeCard/RecipeCard';
import Detiles from '../Detiles/Detiles';

const RecipesWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 29px;
  padding-top: 40px !important;
  padding-bottom: 40px !important;
`;

const List = ({data, activeRecipe, setActiveRecipe}) => {
  const allReripes = data.map((el) => el.items).reduce((acc, val) => acc.concat(val), []);

  return (
    <>
      {
        !Object.keys(activeRecipe).length
        ? 
        <RecipesWrap className={'wrapperS'}>
          {allReripes.map((recipe, index) => {
            return <RecipeCard key={index} setActiveRecipe={setActiveRecipe} recipe={recipe} />;
          })}
        </RecipesWrap>
        : 
        <Detiles data={data} activeRecipe={activeRecipe} setActiveRecipe={setActiveRecipe} />
      }
    </>    
  );
};

export default List;
