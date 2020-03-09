import React, { Component } from "react";
import './App.scss';
import AddBook from './pages/AddBook';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import data from './data/data';

export default function App(props) {
    return (
		<div className="App">
            <Router>
                <Switch>
                    <Route exact 
                        path="/"  
                        component = {Home}
                    />
                    <Route exact 
                        path="/add-book" 
                        component = {AddBook}
                    />
                </Switch>
            </Router>
        </div>
	)      
}
