import styled from 'styled-components';

import varibles from '../../styles/varibles.scss';

import Image from '../../UI/Image/Image';

import styles from './RecipeDescriptionPreview.module.scss';

const Wrapper = styled.div`
  max-width: 477px;
  height: fit-content;
  background: ${varibles.light};
  box-shadow: ${varibles.borderlighten};
`;

const RecipeDescriptionPreview = ({data, activeRecipe}) => {
  return (
    <Wrapper>
      <Image img={process.env.PUBLIC_URL + activeRecipe.image} alt={activeRecipe.name} />
      <div className={styles.content}>
        <p className={styles.title}>{activeRecipe.name}</p>
        <p className={styles.text}>
          <span>Category : </span>
          {activeRecipe.category}
        </p>
        <p className={styles.text}>
          <span>Time fome done : </span>
          {activeRecipe.timeForDone}
        </p>
        <p className={styles.text}>
          <span>Description : </span>
          {activeRecipe.recipe}
        </p>
      </div>
    </Wrapper>
  );
};

export default RecipeDescriptionPreview;
