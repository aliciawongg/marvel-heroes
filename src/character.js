import React from 'react';
import CharacterimageComponent from './characterimage';
import CharacternameComponent from './charactername';

class CharacterComponent extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <div className='charactercontainer'>
                <CharacterimageComponent />
                <CharacternameComponent />
            </div>
        )
    }
}

export default CharacterComponent;