import React from 'react';

class PagesComponent extends React.Component {
    render() {
        const numSearchChar = this.props.searchCharacters.length;
       
        if(numSearchChar <= 3 || numSearchChar === 0) {
            return null; 
        } else {
            return(
                <div className="pages">
                    <button onClick={this.props.handlePrevPage}>Prev</button>
                    <button onClick={this.props.handleNextPage}>Next</button>
                </div>
            )
        }
    } 
}

export default PagesComponent;
