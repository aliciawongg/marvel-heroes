import React from 'react';
import Modal from 'react-bootstrap/Modal';

class CharacterdetailsComponent extends React.Component {
    //close modal which displays character details
    closeModal(event) {
        this.props.closeModal && this.props.closeModal();
    };

    render() {
        if(!this.props.show) {
            return null;
        }
       
        return(
            <Modal show={this.props.show} onHide={e => {this.closeModal()}}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.character.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={`${this.props.character.thumbnail.path}/portrait_small.jpg`} alt={this.props.character.name}/>
                    <p>Description: {this.props.character.description}</p>
                    <CharurlsComponent character = {this.props.character} />
                    <CharcomicsComponent character = {this.props.character} />
                    <CharseriesComponent character = {this.props.character} />
                    <CharstoriesComponent character = {this.props.character} />
                </Modal.Body>
            </Modal>
        )
    }
};

const CharurlsComponent = ({ character }) => {
    return (
        <div>Urls:
            <ul>
                {character.urls.map((url, index) => 
                    <li key={index}><a href={url.url} target="_blank">{url.type}</a></li>)}
            </ul>
        </div>
    );
};

const CharcomicsComponent = ({ character }) => {
    return (
        <div>Comics:
            <ul>
                {character.comics.items.map((comic, index) => 
                    <li key={index}>{comic.name}</li>)}
            </ul>
        </div>
    );
};

const CharseriesComponent = ({ character }) => {
    return (
        <div>Series:
            <ul>
                {character.series.items.map((serie, index) => 
                    <li key={index}>{serie.name}</li>)}
            </ul>
        </div>
    );
};

const CharstoriesComponent = ({ character }) => {
    return (
        <div>Stories:
            <ul>
                {character.stories.items.map((story, index) => 
                    <li key={index}>{story.name}</li>)}
            </ul>
        </div>
    );
};

export default CharacterdetailsComponent;