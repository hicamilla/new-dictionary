import './App.css';
import Dictionary from "./Dictionary";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
         {/* <img src={logo} className="App-logo img-fluid" alt="logo" />*/} 
          <h1>Dictionary</h1>
          <h3>Search your word</h3>
        </header>
        
        <main>
          <Dictionary defaultKeyword="coffee" />
        </main>

        <footer>
          <p className="App-footer"> Created by <a href="#" target="_blank"> Camilla </a> with tons of ☕ . It's available as open-source on <a href="https://github.com/hicamilla/new-dictionary" target="_blank">GitHub.</a> </p>
      </footer>
      </div>
    </div>
  );
}