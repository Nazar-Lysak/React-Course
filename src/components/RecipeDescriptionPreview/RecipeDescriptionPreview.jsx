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

const RecipeDescriptionPreview = ({data}) => {
  return (
    <Wrapper>
      <Image img={process.env.PUBLIC_URL + data[0].items[0].image} alt={data[0].items[0].name} />
      <div className={styles.content}>
        <p className={styles.title}>{data[0].items[0].name}</p>
        <p className={styles.text}>
          <span>Category : </span>
          {data[0].items[0].category}
        </p>
        <p className={styles.text}>
          <span>Time fome done : </span>
          {data[0].items[0].timeForDone}
        </p>
        <p className={styles.text}>
          <span>Description : </span>
          {data[0].items[0].recipe}
        </p>
      </div>
    </Wrapper>
  );
};

export default RecipeDescriptionPreview;
