import { useState } from 'react';

import Button from "./UI/Button/Button";

import {damage} from './helpers/combatCalculate';
import {fire, water, grass, electric} from './helpers/pekemonTypes';
import ElementTyles from "./components/ElementTypes/ElementTyles";
import Result from "./components/Result/Result";
import AttackDeffence from "./components/AttackDeffence/AttackDeffence";

const elements = [fire, water, grass, electric]


const RootComponent = () => {

    const [hero, setHero] = useState('');
    const [opponents, setOppopents] = useState('');
    const [attack, setAttack] = useState();
    const [defence, setDefence] = useState(0);
    const [result, setResult] = useState(0);


    const handleResult = () => {
        const a = elements.filter(el => el.type === hero);
        const b = elements.filter(el => el.type === opponents);

        if(hero && opponents &&  attack && defence) {
            setResult(Math.round(damage(...a, ...b, attack, defence)));
        } else {
            setResult("You have to chose all options");
        }
    }
    
  return (
    <div className="wrapperXL">
        <ElementTyles elements={elements} hero={hero} setHero={setHero} opponents={opponents} setOppopents={setOppopents}/>
        <AttackDeffence setAttack={setAttack} setDefence={setDefence} />
        <Result result={result} />
        <Button title={'Calculate'} active={'Calculate'} click={handleResult} />
  </div>
  )  
};

export default RootComponent;
