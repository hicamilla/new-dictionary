import './App.css';
import Dictionary from "./Dictionary";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
         {/* <img src={logo} className="App-logo img-fluid" alt="logo" />*/} 
          <h1>Wordio</h1>
          <h3>Search Define Learn</h3>
        </header>
        
        <main>
          <Dictionary defaultKeyword="coffee" />
        </main>

        <footer>
          <p className="App-footer"> Created by <a href="https://github.com/hicamilla" target="_blank" rel="noreferrer" > Camilla </a> with tons of ☕ . It's available as open-source on <a href="https://github.com/hicamilla/new-dictionary" target="_blank" rel="noreferrer">GitHub.</a> </p>
      </footer>
      </div>
    </div>
  );
}