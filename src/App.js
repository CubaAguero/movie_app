import { Route, Routes } from 'react-router-dom';

import NavBar from './componets/NavBar/NavBar';
import Home from './pages/Home/Home';
import Categoria from './pages/Categoria/Categoria'
import { Estrenos } from './pages/Estrenos/Estrenos';
import { ItemDetailContainer } from './pages/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/Categoria' element={<Categoria />} />
         <Route path='/Estrenos' element={<Estrenos />} />
         <Route path='/Movie/' element={<ItemDetailContainer />} />
      </Routes>
    </div>
  );
}

export default App;
