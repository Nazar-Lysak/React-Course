import Checkbox from '../../UI/Checkbox/Checkbox';

import styles from './RecipeIngredientsList.module.css';

const RecipeIngredientsList = ({data}) => {

  return (
    <ul className={styles.list}>
      {
        data[0].items[0].ingredients.map((elem, index) => {
          return (
            <li className={styles.item} key={index}>
              {elem}
              <Checkbox />
            </li>
          )
        })
      }
    </ul>
  );
};

export default RecipeIngredientsList;
