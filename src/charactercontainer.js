import React from 'react';

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
        <div>
            <CharacterimageComponent character = {character} />
            <CharacternameComponent character = {character} />
        </div>
    )
}

const CharacterimageComponent = ({character}) => {
    return(
        //<div className="characterimage">
            <img className="characterimage" src={`${character.thumbnail.path}.jpg`} alt={character.name}/>
        //</div>
    )
};

const CharacternameComponent = ({character}) => {
    return(
    <span className="charactername">{character.name}</span>
    )
};

export default CharactercontainerComponent;