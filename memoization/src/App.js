import './App.css';
import {useState, useMemo} from 'react';
import Headher from './components/Headher';

function App() {
  const [count, setCount] = useState(0);
  const data = useMemo(() => {
    return{
      name: 'John Doe',number: count
    }
  }, [count]);

  return (
    <div className="App">
      <Headher data={data} />
      <hr/> 
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

export default App;
