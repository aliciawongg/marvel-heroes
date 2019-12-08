import React from 'react';
import NavbarComponent from '../navbar';
import './list.css'

class ListComponent extends React.Component {
    render() {
        return (
            <div className="listcontainer">
                <NavbarComponent />
                <h2>My List</h2>
                <table>
                    <tr>
                        <td>Spidey-man Fantastic</td>
                        <td><i className="fa fa-trash"/></td>
                    </tr>
                    <tr>
                        <td>Spidey-man Incredible Hulk</td>
                        <td><i className="fa fa-trash"/></td>
                    </tr>
                </table>
            </div>
            
        )
    }
}
export default ListComponent;