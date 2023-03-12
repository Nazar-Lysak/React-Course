import Input from '../../UI/Input/Input';

const AttackDeffence = ({setAttack, setDefence}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', gap: '40px'}}>
      <div>
        <span>Attack : </span>
        <Input input={setAttack} />
      </div>
      <div>
        <span>Deffence : </span>
        <Input input={setDefence} />
      </div>
    </div>
  );
};

export default AttackDeffence;
