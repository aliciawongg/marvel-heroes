import React from 'react';
import './search.css'

class SearchComponent extends React.Component {
    
    render() {
        return (    
            <div className='search'>
                <input type="text" autoFocus placeholder="enter character name ..." 
                onChange={this.props.getSearchWord}/>
                <button onClick={this.props.fetchResults}>Search</button>
            </div>
        )
    }
}

export default SearchComponent;
