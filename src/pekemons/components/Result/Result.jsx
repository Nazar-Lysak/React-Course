import Output from "../../UI/Output/Output";

const Result = ({result}) => {
  return (
    <div style={{textAlign: 'center', margin: '40px 0'}}>
        <span>Damage : </span>
        <Output result={result} />
    </div>
    
  );
};

export default Result;
