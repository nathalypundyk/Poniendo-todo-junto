import React from 'react';
import './App.css';
import PersonCard from './componentes/PersonCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersonCard firstName="Jane" lastName="Doe" age={55} hairColor="Black" />
        <PersonCard firstName="John" lastName="Smith" age={30} hairColor="Brown" />
      </header>
    </div>
  );
}

export default App;
