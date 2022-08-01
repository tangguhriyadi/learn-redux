import ListKontak from './components/listKontak';
import {useState} from 'react'

import './App.css';

function App() {
  const [name, setName] = useState('tangguh')
  return (
    <div className="App">
      <h2> List Kontak APP</h2>
      <ListKontak />
    </div>
  );
}

export default App;
