import Button from '../../UI/Button/Button';

const ElementTyles = ({elements, hero, setHero, opponents, setOppopents}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around', margin: '30px 0'}}>
      <div>
        {elements.map((element, index) => (
          <Button key={index} title={element.type} active={hero} click={setHero} />
        ))}
      </div>
      <div>
        {elements.map((element, index) => (
          <Button key={index} title={element.type} click={setOppopents} active={opponents} />
        ))}
      </div>
    </div>
  );
};

export default ElementTyles;
