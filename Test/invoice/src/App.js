import React, { Component } from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<div className="App">
				<div className="container">
					<Router>
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
						</Switch>
					</Router>
				</div>
			</div>
		);
	}
}

export default App;
