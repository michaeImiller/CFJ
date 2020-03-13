import React, {Component} from "react";
import files from './data/data';
import Sidebar from './components/SideBar';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			data: files
		}
	}

	render(){
		const {data} = this.state;
		return(
			<div>
				<Sidebar data={data} />
			</div>
		);
	}
}
 
export default App;