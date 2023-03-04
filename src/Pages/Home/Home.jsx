import styled from 'styled-components';

import MainBanner from '../../components/MainBanner/MainBanner';
import RecipesCategoryItem from '../../components/RecipesCategoryItem/RecipesCategoryItem';
import Text from '../../UI/Text/Text';

const RecipesWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 22px;
  padding-top: 40px !important;
  padding-bottom: 40px !important;
`;

const Home = ({data}) => {
  return (
    <>
      <MainBanner />
      <Text text={'Recipes'} type={'h2'} textAlign={'center'} />
      <RecipesWrap className={'wrapperXL'}>
        {data.map((category) => {
          return <RecipesCategoryItem key={category.id} {...category} />;
        })}
      </RecipesWrap>
    </>
  );
};

export default Home;
