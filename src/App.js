import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NotesApp from './Components/NotesApp';
import Calculator from './Components/Calculator';
import Nav from './Components/Nav';
import Home from './Components/Home';

function App() {
    return (
    <Router>
        <div className="App">
            <Nav />
            <Switch>
            <Route path="/" exact component= {Home}></Route>
            <Route path="/notesapp" component={NotesApp}></Route>
            <Route path="/calculator" component= {Calculator}></Route>
            </Switch>
        </div>
    </Router>
    );
}

export default App;