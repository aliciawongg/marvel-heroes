import React from 'react';
import './charactercontainer.css';
import CharacterdetailsComponent from './characterdetails';
import Alert from 'react-bootstrap/Alert';

class CharactercontainerComponent extends React.Component {
    render() {
        
        if (this.props.noData === true) {
            return <div className="message">Not found</div>
        }
        return (
            <div className='charactercontainer'>
                {this.props.searchCharacters.map(character => 
                <CharacterComponent key={character.id} character={character} saveCharacters={this.props.saveCharacters} />
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
            showAlert: false
          };
      
        this.showModal = this.showModal.bind(this);
        this.addToList = this.addToList.bind(this);
    }
    
    showModal(event) {
        console.log('click modal');
        this.setState({
            show: !this.state.show
        })
    };

    addToList = (event) => {
        console.log('add character', this.props.character.name);
        this.setState({
            
            saveCharacters: this.props.saveCharacters.concat(this.props.character.name)
        });
        alert("added")
    }

    render() {
        return (    
            <div className='singlecharacter' onClick={e => {this.showModal()}}>
                <CharacterimageComponent character = {this.props.character} addToList={this.addToList} />
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
            <span className="add-button" onClick={e => {props.addToList()}}>
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

// const AddedAlertComponent = () => {
//     // const [showAlert, setShowAlert] = useState(true);
  
//     if (this.props.showAlert) {
//       return (
//         <Alert variant="danger" onClose={() => this.props.showAlert(false)} dismissible>
//           <p>
//             Added
//           </p>
//         </Alert>
//       );
//     }
//   }
  


export default CharactercontainerComponent;

// const CharacterComponent = ({character}) => {
//     return(
//         <div className='singlecharacter' onClick={this.setState({showModal: true})}>
//             <CharacterimageComponent character = {character} />
//             <CharacternameComponent character = {character} />
//         </div>
//     )
// }