import logo from './logo.svg';
import './App.css';

function FavFood() {
  return (
    <p>I like eating crackers at midnight</p>
  )
}

function App() {
  const greeting = "Hello!";

  return (
    <div className="App">
      <header className="App-header">
        <h1>{greeting}</h1>
        <h2>{greeting}</h2>
        <h3>{greeting}</h3>
        <img src={logo} className="App-logo" alt="logo" />
        {FavFood()}
        {FavFood()}
        {FavFood()}
        {FavFood()}
      </header>
    </div>
  );
}

export default App;
