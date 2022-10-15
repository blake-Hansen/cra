import {useState} from 'react';
import './App.css';

function App() {
  const [count , setCount] = useState(0);
  const addHandler = (event) => {
    event.preventDefault()
    setCount(()=> count + event.target.value)
  }
  return (
    <div className="App">
     <h1>Counter</h1>
      <p>Current Number Count: {count}</p>
      <div className="flexMe">
        <button onClick={() => setCount(count+1)}>+</button>
        <button onClick={() => setCount(count-1)}>-</button>

      </div>
    </div>
  );
}

export default App;
