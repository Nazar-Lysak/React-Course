import { useState } from 'react';

import Detiles from './Pages/Detiles/Detiles';
import List from './Pages/List/List';
// import Home from './Pages/Home/Home';
// import Header from './components/Header/Header';

import {data} from './api/api';

import './App.scss';
import RootComponent from './pekemons/RootComponent';

function App() {

  const [activeRecipe, setActiveRecipe] = useState({});

  return (
    <>
      <RootComponent />
      {/* <Header /> */}
      {/* <Home data={data} /> */}
      <List data={data} setActiveRecipe={setActiveRecipe} />
      {Object.keys(activeRecipe).length && <Detiles data={data} activeRecipe={activeRecipe} />}
      

    </>
  );
}

export default App;
