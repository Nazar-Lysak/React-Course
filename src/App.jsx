import Detiles from './Pages/Detiles/Detiles';
import List from './Pages/List/List';
import Home from './Pages/Home/Home';
import Header from './components/Header/Header';

import {data} from './api/api';

import './App.scss';

function App() {
  return (
    <>
      <Header />
      <Home data={data} />
      <List data={data} />
      <Detiles data={data} />
    </>
  );
}

export default App;
