import styled from 'styled-components';
import RecipeDescriptionPreview from '../../components/RecipeDescriptionPreview/RecipeDescriptionPreview';
import RecipeFullDescription from '../../components/RecipeFullDescription/RecipeFullDescription';

const DetilesWrap = styled.div`
  padding-top: 31px !important;
  padding-bottom: 40px !important;
  display: flex;
  gap: 8px;
`;

const Detiles = ({data}) => {
  return (
    <DetilesWrap className={'wrapperXL'}>
      <RecipeDescriptionPreview data={data} />
      <RecipeFullDescription data={data} />
    </DetilesWrap>
  );
};

export default Detiles;
