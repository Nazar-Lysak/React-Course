import styled from 'styled-components';

import RecipeCard from '../../components/RecipeCard/RecipeCard';

const RecipesWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 29px;
  padding-top: 40px !important;
  padding-bottom: 40px !important;
`;

const List = ({data}) => {
  const allReripes = data.map((el) => el.items).reduce((acc, val) => acc.concat(val), []);

  return (
    <RecipesWrap className={'wrapperS'}>
      {allReripes.map((recipe, index) => {
        return <RecipeCard key={index} recipe={recipe} />;
      })}
    </RecipesWrap>
  );
};

export default List;
