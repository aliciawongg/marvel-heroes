import React from 'react';
import './charactercontainer.css';
import CharacterdetailsComponent from './characterdetails';

const CharactercontainerComponent = ({ searchCharacters }) => {
    return (
        <div className='charactercontainer'>
            {searchCharacters.map(character => 
            <CharacterComponent key={character.id} character={character} />
            )}
        </div>
    );
};

class CharacterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
          };
      
          this.showModal = this.showModal.bind(this);
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
                <CharacterimageComponent character = {this.props.character} />
                <CharacternameComponent character = {this.props.character} />
                <CharacterdetailsComponent show={this.state.show} closeModal={this.showModal} character = {this.props.character} />
            </div>
        )
    }
}

const CharacterimageComponent = ({character}) => {
    return(
        //<div className="characterimage">
            <img className="characterimage" src={`${character.thumbnail.path}/standard_fantastic.jpg`} alt={character.name}/>
        //</div>
    )
};

const CharacternameComponent = ({character}) => {
    return(
    <p className="charactername">{character.name}</p>
    )
};

export default CharactercontainerComponent;

// const CharacterComponent = ({character}) => {
//     return(
//         <div className='singlecharacter' onClick={this.setState({showModal: true})}>
//             <CharacterimageComponent character = {character} />
//             <CharacternameComponent character = {character} />
//         </div>
//     )
// }