import React, { Component } from "react";
import './App.scss';
import AddBook from './pages/AddBook';
import Home from './pages/Home';
// import data from './data/data';
import UpdateBook from "./pages/UpdateBook";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as actions from './actions';
import { connect } from "react-redux";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	// componentDidMount(){
	// 	localStorage.setItem('data', JSON.stringify(data));
	// }
	render() {
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
						<Route  
							path = {"/update-book/:id" } 
							component = {UpdateBook}
						/>
					</Switch>
				</Router>
			</div>
		);
	}
}


export default App;

