// import { useState } from 'react';

// import Detiles from './Pages/Detiles/Detiles';
// import List from './Pages/List/List';
// import Home from './Pages/Home/Home';
// import Header from './components/Header/Header';

// import {data} from './api/api';

import './App.scss';
import Todo from './projects/Todo/Todo';
// import Pekemons from './projects/pekemons/Pekemons';
// import TicTacToe from './projects/tic-tac-toe/TicTacToe';

function App() {

  // const [activeRecipe, setActiveRecipe] = useState({});

  return (
    <>
      {/* <TicTacToe /> */}
      {/* <Pekemons /> */}
      <Todo />
      {/* <Header /> */}
      {/* <Home data={data} /> */}
      {/* <List data={data} setActiveRecipe={setActiveRecipe} />
      {Object.keys(activeRecipe).length && <Detiles data={data} activeRecipe={activeRecipe} />} */}
      

    </>
  );
}

export default App;
