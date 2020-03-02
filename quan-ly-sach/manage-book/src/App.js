import React, { Component } from "react";
import './App.scss';
import data from './data/data';
import AddBook from './pages/AddBook';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: data
		}
	}

	componentWillMount(){
		localStorage.setItem("data", JSON.stringify(this.state.data));	
	}
	render() {
		return (
			<div className="App">
				<Router>
					<Switch>
						<Route exact path="/" >
							<Home />
						</Route>
						<Route exact path="/add-book">
							<AddBook />
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}


export default App;
