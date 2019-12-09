import React from 'react';
import NavbarComponent from '../navbar';
import './list.css'

class ListComponent extends React.Component {
    render() {
        return (
            <div className='listcontainer'>
                <NavbarComponent />
                <h2>My List</h2>
                <table>
                    <tbody>
                        {this.props.saveCharacters.map((character, index) => 
                            <CharacterRowComponent key={index} character={character} removeFromList={this.props.removeFromList} />
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
        
const CharacterRowComponent = (props) => (
    <tr>
        <td>{props.character}</td>
        <td><i className="fa fa-trash" onClick={event => {props.removeFromList(props.character)}} /></td>
    </tr>
)

export default ListComponent;