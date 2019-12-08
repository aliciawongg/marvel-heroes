import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import ListComponent from './list/list';
import 'bootstrap/dist/css/bootstrap.min.css';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/mylist" component={ListComponent} />
        </div>
    </Router>
)


ReactDOM.render(
    routing, document.getElementById('root')
);

// render={(props) => <ListComponent {...props} saveCharacters={saveCharacters} />}