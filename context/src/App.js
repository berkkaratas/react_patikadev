import './App.css';
import Button from './components/Button.js';
import ThemeContext from './context/ThemeContext.js';

function App() {
  return (
    <ThemeContext.Provider value="dark" >
        <Button></Button>
    </ThemeContext.Provider>
  );
}

export default App;
