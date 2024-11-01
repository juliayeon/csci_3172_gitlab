import './App.css';
import logo from './image.jpeg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <a
          className="App-link"
          href="https://git.cs.dal.ca/yeon/csci_3172"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click My Git Lab Link!
        </a>
      </header>
    </div>
  );
}

export default App;
