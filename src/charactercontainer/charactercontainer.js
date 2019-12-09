import React from 'react';
import './charactercontainer.css';
import CharacterdetailsComponent from './characterdetails';
import PagesComponent from './pages';

class CharactercontainerComponent extends React.Component {
    render() {

        //return message if user input does not match any character name
        if (this.props.noData === true) {
            return <div className="message">Nothing found</div>
        }

        const indexOfLastChar = this.props.currentPage * this.props.charPerPage;
        const indexOfFirstChar = indexOfLastChar - this.props.charPerPage;
        const currentCharacters = this.props.searchCharacters.slice(indexOfFirstChar, indexOfLastChar);

        return (
            <div className='charactercontainer'>
                {currentCharacters.map((character, index) => 
                    <CharacterComponent key={index} character={character} addToList={this.props.addToList} />
                )}
                <PagesComponent 
                    searchCharacters={this.props.searchCharacters} 
                    charPerPage={this.props.charPerPage}
                    currentPage={this.props.currentPage} 
                    handleNextPage={this.props.handleNextPage}
                    handlePrevPage={this.props.handlePrevPage} />
            </div>
        );
    }
};

class CharacterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
          };

        this.showModal = this.showModal.bind(this);
    }

    //open modal to show details of character
    showModal(event) {
        this.setState({
            show: !this.state.show
        })
    };

    render() {
        return (    
            <div className='singlecharacter' onClick={e => {this.showModal()}}>
                <CharacterimageComponent character = {this.props.character} addToList={this.props.addToList} />
                <CharacternameComponent character = {this.props.character} />
                <CharacterdetailsComponent show={this.state.show} closeModal={this.showModal} character = {this.props.character} />
            </div>
        )
    }
}

const CharacterimageComponent = (props) => {
    return(
        <div className="wrapper">
            <img className="characterimage" src={`${props.character.thumbnail.path}/standard_fantastic.jpg`} alt={props.character.name}/>
            <span className="add-button" onClick={event => {props.addToList(props.character);event.stopPropagation()}}>
                <i className="fa fa-plus" />
            </span>
        </div>
    )
};

const CharacternameComponent = ({character}) => {
    return(
        <p className="charactername">{character.name}</p>
    )
};

export default CharactercontainerComponent;

