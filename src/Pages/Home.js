import logo from '../logo.svg';
import { useState } from 'react'

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
          <input type="button" value="Click here" onClick={increment} />
        </p>
        <p>{contador}</p> Click here
      </header>
    </div>
  );
}

export default App;
