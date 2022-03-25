import { useState } from 'react'
import Main from './pages/Main';
import {Routes,Route} from 'react-router-dom'
import Elenco from './pages/Elenco';
import Sinopse from './pages/Sinopse';

function App() {

  return (
    <div className="App">

    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/sinopse' element={<Sinopse/>} />
      <Route path='/elenco' element={<Elenco/>} />
    </Routes>

    </div>
  )
}

export default App;
