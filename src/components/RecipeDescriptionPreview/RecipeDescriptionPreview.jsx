import styled from 'styled-components';

import Image from '../../UI/Image/Image';

import styles from './RecipeDescriptionPreview.module.css';

const Wrapper = styled.div`
  max-width: 477px;
  height: fit-content;
  background: #FFFFFF;
  box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.15);
`;

const RecipeDescriptionPreview = ({data}) => {
  return (
    <Wrapper>
      <Image img={data[0].items[0].image} alt={data[0].items[0].name} />
      <div className={styles.content}>
        <p className={styles.title}>{data[0].items[0].name}</p>
        <p className={styles.text}>
          <span className="">Category : </span>
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
