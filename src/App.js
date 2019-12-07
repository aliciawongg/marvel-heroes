import React from 'react';
import './App.css';
import CharactercontainerComponent from './charactercontainer';
import SearchComponent from './search';

const url = 'https://gateway.marvel.com/v1/public/characters?nameStartsWith=';
const apikey = '&ts=1565922410&apikey=6a038473ffd6407750a2ea27115f7e7c&hash=1492df65a88ef98a1a279719fe509f72&limit=100';

class App extends React.Component {

  constructor() {
    super();
    
    this.state = {
      userInput: '',
      searchCharacters: [],
    };

    this.getSearchWord = this.getSearchWord.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
  };
  
  getSearchWord (event) {
    let keyword = event.target.value
    keyword = keyword.charAt(0).toUpperCase() + keyword.slice(1);
    
    this.setState ({
      userInput: keyword
    }, function() {
      console.log(this.state.userInput);
    })
  }

  fetchResults() {
    fetch(`${url}${this.state.userInput}${apikey}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          searchCharacters: data.data.results
        });
      })
  }

  render() {
    return (
      <div className="App">
        <SearchComponent 
          userInput={this.state.userInput}
          fetchResults={this.fetchResults}
          getSearchWord={this.getSearchWord} />
        <CharactercontainerComponent searchCharacters={this.state.searchCharacters} />
      </div>
    );
  };
};

export default App;
