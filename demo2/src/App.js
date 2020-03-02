import React, { Component} from "react";
import './styles/App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListRouter from './ListRouter';
// import MyErrorBoundary from "./MyErrorBoundary";

class App extends Component {
	render() {
		console.log(process.env.NODE_ENV );
		return (
			<div className="App">
				<h2>LazyLoad Demo </h2>
				<ListRouter />
			</div>
		);
	}
}


export default App;
