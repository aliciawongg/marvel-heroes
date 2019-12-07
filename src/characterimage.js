import React from 'react';

const API_Key = '&ts=1565922410&apikey=6a038473ffd6407750a2ea27115f7e7c&hash=1492df65a88ef98a1a279719fe509f72';
const url = 'https://gateway.marvel.com/v1/public/characters?nameStartsWith='

class CharacterimageComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            images: [],
        };
    }

    // componentDidMount() {
    //     fetch(`${url}black${API_Key}`)
    //     .then(response => response.json())
    //     .then((data) => {
    //         console.log(data.data.results)
    //         const images = data.data.results.map((image) => {
    //             return(
    //                 <div key={image.id}>
    //                     <img src={`${image.thumbnail.path}.jpg`} alt={image.name}/>
    //                 </div>
    //             )
    //         })
    //         this.setState({images: images});
    //         console.log('showing heroes images');
    //     });
    // }

    render() {
        return (
            <div className='characterimage'>
                {this.state.images};
            </div>
        )
    }
}

export default CharacterimageComponent 