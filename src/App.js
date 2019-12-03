import React from 'react';
import './App.css';
import SearchboxComponent from './searchbox';
import CharacterComponent from './character';

class App extends React.Component {

  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <div className="App">
        <SearchboxComponent />
        <CharacterComponent />
      </div>
    );
  }
}

export default App;
