import React, { Component} from "react";
// import data from '../data/data';

class ListBooks extends Component {
	constructor (props){
		super(props);
		this.state = {
			data: []
		}
    }
    componentWillMount(){
        let data = JSON.parse(localStorage.getItem("data"));
        this.setState({
            data: data
        })
	}
	render() {
        console.log(this.state.data);
        
		const elmData = this.state.data.map((item, key ) => {
			return(
                <tr key = {key}>
                    <td> {key +1 } </td>
                    <td> {item.name} </td>
                    <td> {item.author} </td>
                    <td> {item.publisher} </td>
                    <td> {item.amount} </td>
                </tr>
			);
		});
		return (
			<div className="list-books">
                <table>
                    <thead>
                        <tr>
                            <th> STT </th>
                            <th> Tên sách </th>
                            <th> Tác giả </th>
                            <th> NXB </th>
                            <th> Số lượng </th>
                        </tr>
                    </thead>
                    <tbody>
                        {elmData}
                    </tbody>
                    
                </table>
				
			</div>
		);
	}
}


export default ListBooks;
