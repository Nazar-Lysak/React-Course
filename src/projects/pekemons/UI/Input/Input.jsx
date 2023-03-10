

const Input = ({input}) => {
  return <input type="number" onChange={(e) =>input(e.target.value) } />
};

export default Input;