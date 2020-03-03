import React, { Component } from "react";
import './App.scss';
// import data from './data/data';
import AddBook from './pages/AddBook';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


// let initialState = {
// 	data: data
// };

// const action = {
// 	type: 'ADD_NEW_BOOK'
// }


// store.dispatch(action);

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: ''
		}
	}
	
	render() {
		
		return (
			<div className="App">
				<Router>
					<Switch>
						<Route exact 
							path="/"  
							render = {(props) => <Home {...props} data = {this.state.data} />} 
						/>
						<Route exact 
							path="/add-book" 
							render = {(props) => <AddBook {...props} data = {this.state.data} />}
						/>
					</Switch>
				</Router>
			</div>
		);
	}
}



export default App;
