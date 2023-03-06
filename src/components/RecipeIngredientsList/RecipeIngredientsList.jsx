import Checkbox from '../../UI/Checkbox/Checkbox';

import styles from './RecipeIngredientsList.module.scss';

const RecipeIngredientsList = ({data, activeRecipe}) => {
  return (
    <ul className={styles.list}>
      {activeRecipe.ingredients.map((elem, index) => {
        return (
          <li className={styles.item} key={index}>
            {elem}
            <Checkbox />
          </li>
        );
      })}
    </ul>
  );
};

export default RecipeIngredientsList;
