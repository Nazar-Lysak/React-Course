import { useState, useEffect } from 'react';

import './Search.css';

import Image from '../../UI/Image/Image';
import Text from '../../UI/Text/Text';

const Search = ({data}) => {    

    const recipeArray = data
        .map((el) => el.items)
        .reduce((acc, val) => acc.concat(val), []);

    const [inputValue, setInputValue] = useState('');
    const [filtredData, setFiltredData] = useState(recipeArray);
    
    useEffect(() => {
        const lowerCaseInput = inputValue.toLowerCase();
        setFiltredData(
          recipeArray.filter((el) =>
            !inputValue.length ||
            (el.name.toLowerCase().includes(lowerCaseInput) ||
             el.description.toLowerCase().includes(lowerCaseInput))
          )
        );
    }, [inputValue]);

  return (
    <div style={{padding: '30px 0', textAlign: 'center'}} className={'wrapperS'}>
        <span style={{marginRight: '20px'}}>Enter Recipe</span>
        <input 
        className={'searchInput'} 
        type='text'
        placeholder={'Search'} 
        onChange={(e) => setInputValue(e.target.value)} />
        <div className={'search-item_wrapper'}>
            {
                filtredData.map(recipe => {
                    return (
                        <div className={'searchItem'} key={recipe.name}>                            
                            <Image 
                                img={process.env.PUBLIC_URL + recipe.image} 
                                alt={recipe.name} 
                            />
                            <div className={'text-wrapper'}>
                                <Text 
                                    text={recipe.name} 
                                    type={'h3'} 
                                    textAlign={'center'} 
                                />
                                <Text 
                                    text={recipe.description} 
                                    type={'small'}
                                />
                            </div>
                            
                        </div>
                    ) 
                }).reduce((acc, val) => acc.concat(val), [])
            }
        </div>
    </div>
  )
};


export default Search;
