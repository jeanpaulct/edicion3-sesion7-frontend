import logo from '../logo.svg';
import Header from '../Header';
import { useState } from 'react';
import {Link} from 'react-router-dom';

function App() {

  const [contador, setContador] = useState(0);

  function increment() {
    setContador(contador + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <input type="button" value="Click to me" onClick={increment} />
        </p>
        <p>{contador}</p> Click to me
      </header>
    </div>
  );
}

export default App;
