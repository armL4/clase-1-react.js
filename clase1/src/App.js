import React from 'react';
import cartWidget from './components/cartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Item from './components/Item';

function App() {
  return (
    
    <div className='App'>
        <NavBar />
    </div>
    

    
    
  );
}
export default App
