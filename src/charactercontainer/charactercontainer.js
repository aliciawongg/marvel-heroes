import React from 'react';
import './charactercontainer.css';

const CharactercontainerComponent = ({ searchCharacters }) => {
    return (
        <div className='charactercontainer'>
            {searchCharacters.map(character => 
            <CharacterComponent key={character.id} character={character} />
            )}
        </div>
    );
};

const CharacterComponent = ({character}) => {
    return(
        <div className='singlecharacter'>
            <CharacterimageComponent character = {character} />
            <CharacternameComponent character = {character} />
        </div>
    )
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