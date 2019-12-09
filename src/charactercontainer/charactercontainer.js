import React from 'react';
import './charactercontainer.css';
import CharacterdetailsComponent from './characterdetails';

class CharactercontainerComponent extends React.Component {
    render() {
        
        if (this.props.noData === true) {
            return <div className="message">Nothing found</div>
        }
        return (
            <div className='charactercontainer'>
                {this.props.searchCharacters.map(character => 
                <CharacterComponent key={character.id} character={character} addToList={this.props.addToList} />
                )}
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
        //this.addToList = this.addToList.bind(this);
    }
    
    showModal(event) {
        console.log('click modal');
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

