import './App.css';
import Nav from "./components/Nav"
import Explorer from "./components/Explorer";

function App() {
  return (
    <div className="App">
    
      <header className="App-header">
      <p>Space Cowboy</p>
         <Nav />
         <Explorer />
      </header>
    </div>
  );
}

export default App;
