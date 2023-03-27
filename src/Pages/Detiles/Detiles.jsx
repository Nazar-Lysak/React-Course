import styled from 'styled-components';
import RecipeDescriptionPreview from '../../components/RecipeDescriptionPreview/RecipeDescriptionPreview';
import RecipeFullDescription from '../../components/RecipeFullDescription/RecipeFullDescription';

const DetilesWrap = styled.div`
  padding-top: 31px !important;
  padding-bottom: 40px !important;
  display: flex;
  gap: 8px;
`;

const Detiles = ({data, activeRecipe, setActiveRecipe}) => {
  return (
    <DetilesWrap className={'wrapperXL'}>
      <RecipeDescriptionPreview data={data} activeRecipe={activeRecipe} />
      <RecipeFullDescription data={data} activeRecipe={activeRecipe} setActiveRecipe={setActiveRecipe} />
    </DetilesWrap>
  );
};

export default Detiles;
