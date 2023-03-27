import { useState } from 'react'

import Checkbox from '../../UI/Checkbox/Checkbox';

import styles from './RecipeIngredientsList.module.scss';



const RecipeIngredientsList = ({data, activeRecipe}) => {

const [activeElements, setActiveElements] = useState([])  

  return (
    <ul className={styles.list}>
      {activeRecipe.ingredients.map((elem, index) => {
        return (
          <li 
            style={
              (activeElements.length && activeElements.includes(index))
                ? { 
                    textDecoration: 'line-through',
                    color: `rgb(243 6 6 / 70%)` 
                  } 
                : {}}
            className={styles.item} key={index}>
            {elem}
            <Checkbox 
              index={index}
              activeElements={activeElements}
              setActiveElements={setActiveElements}            
            />
          </li>
        );
      })}
    </ul>
  );
};

export default RecipeIngredientsList;
