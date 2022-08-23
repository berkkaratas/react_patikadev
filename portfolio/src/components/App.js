import './App.css';

function App() {
  return (
    <div className="App">

      <header>
        <h1>Berk Karataş</h1>
        <p>Student at Fethiye Belediye Fen Lisesi</p>
      </header>
      <main>
        <div className='mySocial'>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/berkkaratas" >Linkedin</a>
          <a target="_blank" rel="noreferrer" href="https://www.github.com/berkkaratas" >Github</a>
          <a target="_blank" rel="noreferrer" href="mailto:berk-karatas@pm.me" >Mail</a>
        </div>

        <div className='myProjects'>
          <h3>My Projects</h3>
          <div className='project-item'>
            <a target="_blank" rel="noreferrer" href="https://dilyaz.com" >Dilyaz</a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
