import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import ListComponent from './list/list';
import NavbarComponent from './navbar';
import SearchComponent from './search/search';
import CharactercontainerComponent from './charactercontainer/charactercontainer';
import { throwStatement } from '@babel/types';

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
      currentPage: 1,
      charPerPage: 3,
      // showPrev: false,
      // showNext: false
    };

    this.getSearchWord = this.getSearchWord.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
    this.addToList = this.addToList.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
    this.handlePrevPage = this.handlePrevPage.bind(this);
    //this.setButtonActive = this.setButtonActive.bind(this);
   
  };
  
  getSearchWord (event) {
    let keyword = event.target.value
    keyword = keyword.charAt(0).toUpperCase() + keyword.slice(1);
    
    this.setState ({
      userInput: keyword
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
    this.setState({
        saveCharacters: this.state.saveCharacters.concat(event.name)
    });
    alert(`Added ${event.name} to My List.`)
  }

  removeFromList(event) {
    this.setState({
      saveCharacters: this.state.saveCharacters.filter(function(person) {
        return person !== event
      })
    })
    alert(`Removed ${event} from My List`);
  }

  handleNextPage(event) {
    this.setState({
      currentPage: this.state.currentPage+1
    })
    //this.setButtonActive();
  }

  handlePrevPage(event) {
    this.setState({
      currentPage: this.state.currentPage-1
    })
    //this.setButtonActive();
  }

  // setButtonActive() {
  //   const numOfPages = this.state.searchCharacters/this.state.charPerPage;
  //   if(this.state.currentPage === 1 && numOfPages > 1){
  //       this.setState({
  //           showPrev: false
  //       }, function(){console.log(this.state.showPrev)})
  //   } else if (this.state.currentPage === (this.state.searchCharacters/this.state.charPerPage)) {
  //       this.setState({
  //           showNext: false
  //       })
  //   }
  // }

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
                currentPage={this.state.currentPage}
                charPerPage={this.state.charPerPage}
                addToList={this.addToList} 
                handleNextPage={this.handleNextPage}
                handlePrevPage={this.handlePrevPage} />
            </div> } />
          <Route path="/mylist" render={() => 
            <ListComponent 
              saveCharacters={this.state.saveCharacters} 
              removeFromList={this.removeFromList}/>
          } />
        </Switch>
      </main>
    );
  };
};

export default App;
