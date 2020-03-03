import React, { Component} from "react";
import {connect} from 'react-redux';

class ListBooks extends Component {
	constructor (props){
		super(props);
		this.state = {
			
		}
    }
	render() {
        console.log(this.props.list);
        
		const elmData = this.props.list.map((item, key) => {
			return (
				<tr key={key}>
					<td> {key + 1} </td>
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

const mapStateToProps = (state) => {
    return{
        list: state.demo
    }
};

export default connect(mapStateToProps, null) (ListBooks);
