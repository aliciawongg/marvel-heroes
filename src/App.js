import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import ListComponent from './list/list';
import NavbarComponent from './navbar';
import SearchComponent from './search/search';
import CharactercontainerComponent from './charactercontainer/charactercontainer';


const url = 'https://gateway.marvel.com/v1/public/characters?nameStartsWith=';
const apikey = '&ts=1565922410&apikey=6a038473ffd6407750a2ea27115f7e7c&hash=1492df65a88ef98a1a279719fe509f72&limit=100';

class App extends React.Component {

  constructor() {
    super();
    
    this.state = {
      userInput: '',
      searchCharacters: [],
      noData: false,
      saveCharacters: [],
    };

    this.getSearchWord = this.getSearchWord.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
    this.addToList = this.addToList.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
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
        console.log(data.data.results.length);
        if (data.data.results.length === 0) {
          this.setState({
            noData: true})
        } else {        
          this.setState({
            noData: false,
            searchCharacters: data.data.results
          });
        }
      })
      .catch((error) => {
        console.log(error);
    });
  }

  addToList(event) {
    console.log('add character:', event.name);
    this.setState({
        saveCharacters: this.state.saveCharacters.concat(event.name)
    }, function(){
      console.log(this.state.saveCharacters)
    } );
    alert(`Added ${event.name} to My List.`)
    
}

  removeFromList(event) {
    console.log('remove character:', event)
    this.setState({
      saveCharacters: this.state.saveCharacters.filter(function(person) {
        return person != event
      })
    })
    alert(`Removed ${event} from My List`);
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" render={(props) => 
            <div className="App">
              <NavbarComponent />
              <SearchComponent 
                fetchResults={this.fetchResults}
                getSearchWord={this.getSearchWord} />
              <CharactercontainerComponent 
                searchCharacters={this.state.searchCharacters} 
                noData={this.state.noData} 
                addToList={this.addToList} />
            </div> } />
          <Route path="/mylist" render={() => <ListComponent saveCharacters={this.state.saveCharacters} removeFromList={this.removeFromList}/>} />
        </Switch>
      </main>
    );
  };
};

export default App;
