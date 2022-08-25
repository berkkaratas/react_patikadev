import './App.css';
import {useState} from 'react';
import Headher from './components/Headher';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Headher count={count < 5 ? 0 : count} />
      <hr/> 
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

export default App;
