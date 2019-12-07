import React from 'react';

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log('initial state');
    }
    
    render() {
        return (    
            <div className='searchbox'>
                <input type="text" autoFocus placeholder="enter character name ..." 
                onChange={this.props.getSearchWord}/>
                <button onClick={this.props.fetchResults}>Search</button>
            </div>
        )
    }
}

export default SearchComponent;
