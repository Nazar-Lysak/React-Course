import FiledItem from "./FiledItem";


const Board = ({board, nextStep, winner, resetGame, clickFiled}) => {
  return (
    <div>
        {
        winner && <p style={{color: '#fff', fontSize: '30px', textAlign: 'center', padding: '10px 20px'}}>
                winner is : "{winner}"
            </p>
        }
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '10px'}}>        
            {
                board.map((el, i) => <FiledItem key={i} el={el} clickFiled={clickFiled} index={i} />)
            }        
        </div>
        <span onClick={() => resetGame()} style={{color: '#fff', fontSize: '30px', padding: '10px 20px', cursor: 'pointer'}}>Reset Game</span>
        <p style={{color: '#fff', fontSize: '30px', padding: '10px 20px', display: 'inline'}}>
            Next step by "{nextStep ? 'X' : '0'}"
        </p>
    </div>
  )
};

export default Board;
