import { Routes, Route } from 'react-router-dom';

import { useState } from 'react';

// import Detiles from './Pages/Detiles/Detiles';
import List from './Pages/List/List';
import Home from './Pages/Home/Home';
import Header from './components/Header/Header';

import {data} from './api/api';

import './App.scss';
import Todo from './projects/Todo/Todo';
import Pekemons from './projects/pekemons/Pekemons';
import TicTacToe from './projects/tic-tac-toe/TicTacToe';
import Search from './Pages/Search/Search';

function App() {
  const [activeRecipe, setActiveRecipe] = useState({});

  return (
    <>
      <Header />
      <Routes>     
        <Route path='/home' element={<Home data={data} />} /> 
        <Route path='/list' element={<List data={data} setActiveRecipe={setActiveRecipe} activeRecipe={activeRecipe} />} />
        <Route path='/search' element={<Search data={data} />} />        
        <Route path='/todo-list' element={<Todo />} /> 
        <Route path='/tic-tac-toe' element={<TicTacToe />} /> 
        <Route path='/pekemons' element={<Pekemons />} />     
      </Routes>      
    </>    
  );
}

export default App;
