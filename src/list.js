import React from 'react';
import NavbarComponent from './navbar';

class ListComponent extends React.Component {
    render() {
        return (
            <div className="list">
                <NavbarComponent />
                <h4>My List</h4>
            </div>
            
        )
    }
}
export default ListComponent;