import React, {useState} from 'react';
import './App.css';
import Children from './Children'
import AppProvider from './AppProvider';
import AppContext from './context/AppContext'
import ChildChild from './ChildChild';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			number: 10
		}
	}
	
	render(){
		const {number} = this.state;
		return (
			<div className="App">
			<AppProvider>
				<Children name={number} component = {ChildChild} >

				</Children>
			</AppProvider>
				
			</div>
		);
	}
}

export default App;
